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
import { validatePhone, validateEmail, validateRequired, handleFormSubmit } from "../../src/utils/formValidation";
import { FormMessage } from "../../src/components/FormMessage";

export function Contact2() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experienceLevel: "",
    coverLetter: "",
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
    newErrors.position = validateRequired(formData.position, "Position");
    newErrors.experienceLevel = validateRequired(formData.experienceLevel, "Experience level");
    newErrors.coverLetter = validateRequired(formData.coverLetter, "Cover letter");
    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms and conditions";
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
    const result = await handleFormSubmit({ ...formData, formType: "job-application" }, "job-application");
    setIsSubmitting(false);
    
    setSubmitMessage(result);
    
    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        experienceLevel: "",
        coverLetter: "",
        terms: false
      });
    }
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Application</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Submit your application
          </h2>
          <p className="md:text-md">
            Tell us about yourself and why you belong here
          </p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
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
              Position you are applying for <span className="text-school-red">*</span>
            </Label>
            <Select
              value={formData.position}
              onValueChange={(value) => handleChange("position", value)}
            >
              <SelectTrigger className={errors.position ? "border-red-500" : ""}>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="principal">Principal</SelectItem>
                <SelectItem value="vice-principal">Vice Principal</SelectItem>
                <SelectItem value="teacher-primary">Primary School Teacher</SelectItem>
                <SelectItem value="teacher-secondary">Secondary School Teacher</SelectItem>
                <SelectItem value="teacher-montessori">Montessori Teacher</SelectItem>
                <SelectItem value="subject-teacher">Subject Specialist Teacher</SelectItem>
                <SelectItem value="head-academics">Head of Academics</SelectItem>
                <SelectItem value="head-sports">Head of Sports</SelectItem>
                <SelectItem value="counselor">Guidance Counselor</SelectItem>
                <SelectItem value="admin-staff">Administrative Staff</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.position && (
              <p className="mt-1 text-sm text-red-600">{errors.position}</p>
            )}
          </div>
          <div className="grid w-full items-center py-3 md:py-4">
            <Label className="mb-3 md:mb-4">
              What is your current experience level? <span className="text-school-red">*</span>
            </Label>
            <RadioGroup
              value={formData.experienceLevel}
              onValueChange={(value) => handleChange("experienceLevel", value)}
              className="grid grid-cols-2 gap-x-6 gap-y-3.5"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="early-career" id="early-career" />
                <Label htmlFor="early-career">Early career (0-2 years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mid-career" id="mid-career" />
                <Label htmlFor="mid-career">Mid-career (3-5 years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="experienced" id="experienced" />
                <Label htmlFor="experienced">Experienced (6-10 years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="senior" id="senior" />
                <Label htmlFor="senior">Senior level (11+ years)</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="leadership" id="leadership" />
                <Label htmlFor="leadership">Leadership role</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other-exp" />
                <Label htmlFor="other-exp">Other</Label>
              </div>
            </RadioGroup>
            {errors.experienceLevel && (
              <p className="mt-1 text-sm text-red-600">{errors.experienceLevel}</p>
            )}
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="coverLetter" className="mb-2">
              Cover letter <span className="text-school-red">*</span>
            </Label>
            <Textarea
              id="coverLetter"
              value={formData.coverLetter}
              onChange={(e) => handleChange("coverLetter", e.target.value)}
              placeholder="Share your story with us - why you want to join Benchmark School System"
              className={`min-h-[11.25rem] overflow-auto ${errors.coverLetter ? "border-red-500" : ""}`}
            />
            {errors.coverLetter && (
              <p className="mt-1 text-sm text-red-600">{errors.coverLetter}</p>
            )}
          </div>
          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox
              id="terms"
              checked={formData.terms}
              onCheckedChange={(checked) => handleChange("terms", checked)}
            />
            <Label htmlFor="terms" className="cursor-pointer">
              I agree to the terms and conditions <span className="text-school-red">*</span>
            </Label>
          </div>
          {errors.terms && (
            <p className="mb-2 text-sm text-red-600">{errors.terms}</p>
          )}
          <div className="text-center">
            <Button type="submit" title="Submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
