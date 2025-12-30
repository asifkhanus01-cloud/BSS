"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { validateEmail, validateRequired, handleFormSubmit } from "../../src/utils/formValidation";
import { FormMessage } from "../../src/components/FormMessage";
import { schoolInfo } from "../../src/data/schoolInfo";

export function Contact5() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
    newErrors.name = validateRequired(formData.name, "Name");
    newErrors.email = validateEmail(formData.email);
    newErrors.message = validateRequired(formData.message, "Message");
    if (!formData.terms) {
      newErrors.terms = "You must agree to the privacy policy";
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
    const result = await handleFormSubmit({ ...formData, formType: "director-contact" }, "director-contact");
    setIsSubmitting(false);
    
    setSubmitMessage(result);
    
    if (result.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
        terms: false
      });
    }
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
          <div>
            <div className="mb-6 md:mb-8">
              <p className="mb-3 font-semibold md:mb-4">Connection</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Get in touch
              </h2>
              <p className="md:text-md">
                I am available to discuss your child's educational journey.
              </p>
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
          <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
            {submitMessage && (
              <FormMessage
                type={submitMessage.success ? "success" : "error"}
                message={submitMessage.message}
                onClose={() => setSubmitMessage(null)}
              />
            )}
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-2">
                Name <span className="text-school-red">*</span>
              </Label>
              <Input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
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
              <Label htmlFor="message" className="mb-2">
                Message <span className="text-school-red">*</span>
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Write your inquiry here"
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
                I agree to the privacy policy <span className="text-school-red">*</span>
              </Label>
            </div>
            {errors.terms && (
              <p className="mb-2 text-sm text-red-600">{errors.terms}</p>
            )}
            <div>
              <Button type="submit" title="Schedule a meeting" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Schedule a meeting"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
