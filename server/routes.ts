import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
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
