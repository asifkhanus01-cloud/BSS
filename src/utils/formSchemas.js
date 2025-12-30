/**
 * Zod Validation Schemas for Forms
 * Type-safe form validation using Zod
 */
import { z } from 'zod';

// Contact Form Schema
export const contactFormSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^(\+92|0)?[0-9]{10}$/, "Invalid phone number (e.g., +92 311 5890332 or 0311 5890332)"),
    inquiry: z.string().min(1, "Please select an inquiry type"),
    connection: z.string().min(1, "Please select how you're connected"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    terms: z.boolean().refine(val => val === true, "You must agree to the terms")
});

// Admission Form Schema
export const admissionFormSchema = z.object({
    studentName: z.string().min(2, "Student name must be at least 2 characters"),
    parentName: z.string().min(2, "Parent name must be at least 2 characters"),
    phone: z.string().regex(/^(\+92|0)?[0-9]{10}$/, "Invalid phone number"),
    email: z.string().email("Invalid email address"),
    grade: z.string().min(1, "Please select a grade"),
    currentSchool: z.string().min(2, "Current school name is required"),
    message: z.string().optional()
});

// Job Application Form Schema
export const jobApplicationSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^(\+92|0)?[0-9]{10}$/, "Invalid phone number"),
    position: z.string().min(1, "Please select a position"),
    experience: z.string().min(1, "Please select your experience level"),
    coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
    terms: z.boolean().refine(val => val === true, "You must agree to the terms and conditions")
});

// Director Contact Form Schema
export const directorContactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    terms: z.boolean().refine(val => val === true, "You must agree to the privacy policy")
});

// Type exports for TypeScript-like usage
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type AdmissionFormData = z.infer<typeof admissionFormSchema>;
export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;
export type DirectorContactFormData = z.infer<typeof directorContactSchema>;

