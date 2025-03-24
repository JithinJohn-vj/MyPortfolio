import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the public directory
  app.use('/public', express.static(path.join(process.cwd(), 'public')));
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validationResult = insertContactSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message,
        });
      }
      
      // Store the contact message
      const contactMessage = await storage.createContactMessage(validationResult.data);
      
      // Set up email transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER || 'your-email@gmail.com',
          pass: process.env.EMAIL_PASS || 'your-password',
        },
      });
      
      // Set up email options
      const mailOptions = {
        from: req.body.email,
        to: 'jithinjohnptr@gmail.com',
        subject: `Portfolio Contact: ${req.body.subject}`,
        text: `
          Name: ${req.body.name}
          Email: ${req.body.email}
          
          Message:
          ${req.body.message}
        `,
        html: `
          <h3>New contact message from your portfolio website</h3>
          <p><strong>Name:</strong> ${req.body.name}</p>
          <p><strong>Email:</strong> ${req.body.email}</p>
          <p><strong>Subject:</strong> ${req.body.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${req.body.message}</p>
        `,
      };
      
      // Send email (wrapped in try/catch to avoid breaking the endpoint if email fails)
      try {
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
          await transporter.sendMail(mailOptions);
          console.log('Email sent successfully');
        } else {
          console.log('Email credentials not configured, skipping email sending');
        }
      } catch (emailError) {
        console.error('Error sending email:', emailError);
        // We don't return an error response here since we still saved the message in the database
      }
      
      return res.status(201).json({
        message: "Contact message received successfully",
        id: contactMessage.id,
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({
        message: "Internal server error",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
