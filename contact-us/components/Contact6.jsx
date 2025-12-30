"use client";

import {
  Button,
  Checkbox,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { validatePhone, validateEmail, validateRequired, handleFormSubmit } from "../../src/utils/formValidation";
import { FormMessage } from "../../src/components/FormMessage";
import { schoolInfo } from "../../src/data/schoolInfo";

export function Contact6() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "",
    connectionType: "",
    message: "",
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    newErrors.firstName = validateRequired(formData.firstName, "First name");
    newErrors.lastName = validateRequired(formData.lastName, "Last name");
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.inquiryType = validateRequired(formData.inquiryType, "Inquiry type");
    newErrors.connectionType = validateRequired(formData.connectionType, "Connection type");
    newErrors.message = validateRequired(formData.message, "Message");
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(null);

    if (!validateForm()) {
      setSubmitMessage({ type: "error", message: "Please fix the errors below and try again." });
      return;
    }

    setIsSubmitting(true);
    const result = await handleFormSubmit(formData, "contact");
    setIsSubmitting(false);
    
    setSubmitMessage(result);
    
    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        inquiryType: "",
        connectionType: "",
        message: "",
        terms: false
      });
    }
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <div className="mb-6 md:mb-8">
            <p className="mb-3 font-semibold md:mb-4">Message</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Send your inquiry
            </h2>
            <p className="md:text-md">Tell us what brings you here today</p>
          </div>
          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <a href={`mailto:${schoolInfo.contact.email}`} className="hover:text-school-blue">
                {schoolInfo.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <a href={`tel:${schoolInfo.contact.phone}`} className="hover:text-school-blue">
                {schoolInfo.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p>{schoolInfo.contact.address}</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
          {submitMessage && (
            <FormMessage
              type={submitMessage.success ? "success" : "error"}
              message={submitMessage.message}
              onClose={() => setSubmitMessage(null)}
            />
          )}
          <div className="grid grid-cols-2 gap-6">
            <div className="grid w-full items-center">
              <Label htmlFor="firstName" className="mb-2">
                First name <span className="text-school-red">*</span>
              </Label>
              <Input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="lastName" className="mb-2">
                Last name <span className="text-school-red">*</span>
              </Label>
              <Input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email <span className="text-school-red">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="phone" className="mb-2">
                Phone number <span className="text-school-red">*</span>
              </Label>
              <Input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+92 311 5890332"
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label className="mb-2">
              What is your inquiry about? <span className="text-school-red">*</span>
            </Label>
            <Select
              value={formData.inquiryType}
              onValueChange={(value) => handleChange("inquiryType", value)}
            >
              <SelectTrigger className={errors.inquiryType ? "border-red-500" : ""}>
                <SelectValue placeholder="Select topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admissions">Admissions & Enrollment</SelectItem>
                <SelectItem value="academics">Academic Programs</SelectItem>
                <SelectItem value="fees">Fee Structure & Payment</SelectItem>
                <SelectItem value="transport">Transportation</SelectItem>
                <SelectItem value="events">School Events</SelectItem>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.inquiryType && (
              <p className="mt-1 text-sm text-red-600">{errors.inquiryType}</p>
            )}
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">
              How are you connected to Benchmark? <span className="text-school-red">*</span>
            </Label>
            <RadioGroup
              value={formData.connectionType}
              onValueChange={(value) => handleChange("connectionType", value)}
              className="grid grid-cols-2 gap-x-6 gap-y-3.5"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="current-parent" id="current-parent" />
                <Label htmlFor="current-parent">Current parent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="prospective-parent" id="prospective-parent" />
                <Label htmlFor="prospective-parent">Prospective parent</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="student" id="student" />
                <Label htmlFor="student">Student inquiry</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="staff" id="staff" />
                <Label htmlFor="staff">Staff member</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="general" id="general" />
                <Label htmlFor="general">General question</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">Other</Label>
              </div>
            </RadioGroup>
            {errors.connectionType && (
              <p className="mt-1 text-sm text-red-600">{errors.connectionType}</p>
            )}
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message <span className="text-school-red">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Share your message here"
              className={`min-h-[11.25rem] overflow-auto ${errors.message ? "border-red-500" : ""}`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) => handleChange("terms", checked)}
            />
            <Label htmlFor="terms" className="cursor-pointer">
              I agree to the terms <span className="text-school-red">*</span>
            </Label>
          </div>
          {errors.terms && (
            <p className="mb-2 text-sm text-red-600">{errors.terms}</p>
          )}
          <div>
            <Button type="submit" title="Send" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
