"use client";

import { Button, Input, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@relume_io/relume-ui";
import React, { useState } from "react";
import { validatePhone, validateEmail, validateRequired, handleFormSubmit } from "../../src/utils/formValidation";
import { FormMessage } from "../../src/components/FormMessage";

export function Cta40() {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "",
    currentSchool: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    newErrors.studentName = validateRequired(formData.studentName, "Student name");
    newErrors.parentName = validateRequired(formData.parentName, "Parent/Guardian name");
    newErrors.phone = validatePhone(formData.phone);
    newErrors.email = validateEmail(formData.email);
    newErrors.grade = validateRequired(formData.grade, "Grade/Class");

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
    const result = await handleFormSubmit(formData, "admission");
    setIsSubmitting(false);
    
    setSubmitMessage(result);
    
    if (result.success) {
      // Reset form
      setFormData({
        studentName: "",
        parentName: "",
        phone: "",
        email: "",
        grade: "",
        currentSchool: "",
        message: ""
      });
    }
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr grid-cols-1 border border-border-primary lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Begin your application today
            </h2>
            <p className="md:text-md">
              Complete this form and our admissions team will contact you within
              two business days.
            </p>
            <div className="mt-6 w-full max-w-lg md:mt-8">
              <form onSubmit={handleSubmit} className="mb-4 grid w-full grid-cols-1 gap-y-4">
                {submitMessage && (
                  <FormMessage
                    type={submitMessage.success ? "success" : "error"}
                    message={submitMessage.message}
                    onClose={() => setSubmitMessage(null)}
                  />
                )}

                <div className="grid w-full items-center">
                  <Label htmlFor="studentName" className="mb-2">
                    Student Name <span className="text-school-red">*</span>
                  </Label>
                  <Input
                    id="studentName"
                    type="text"
                    value={formData.studentName}
                    onChange={(e) => handleChange("studentName", e.target.value)}
                    placeholder="Enter student's full name"
                    className={errors.studentName ? "border-red-500" : ""}
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-sm text-red-600">{errors.studentName}</p>
                  )}
                </div>

                <div className="grid w-full items-center">
                  <Label htmlFor="parentName" className="mb-2">
                    Parent/Guardian Name <span className="text-school-red">*</span>
                  </Label>
                  <Input
                    id="parentName"
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => handleChange("parentName", e.target.value)}
                    placeholder="Enter parent/guardian name"
                    className={errors.parentName ? "border-red-500" : ""}
                  />
                  {errors.parentName && (
                    <p className="mt-1 text-sm text-red-600">{errors.parentName}</p>
                  )}
                </div>

                <div className="grid w-full items-center">
                  <Label htmlFor="phone" className="mb-2">
                    Parent Phone Number <span className="text-school-red">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+92 311 5890332 or 0311 5890332"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="grid w-full items-center">
                  <Label htmlFor="email" className="mb-2">
                    Parent Email <span className="text-school-red">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="parent@example.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div className="grid w-full items-center">
                  <Label htmlFor="grade" className="mb-2">
                    Grade/Class Applying For <span className="text-school-red">*</span>
                  </Label>
                  <Select
                    value={formData.grade}
                    onValueChange={(value) => handleChange("grade", value)}
                  >
                    <SelectTrigger className={errors.grade ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Pre-Nursery">Pre-Nursery</SelectItem>
                      <SelectItem value="Nursery">Nursery</SelectItem>
                      <SelectItem value="KG">KG</SelectItem>
                      <SelectItem value="Grade 1">Grade 1</SelectItem>
                      <SelectItem value="Grade 2">Grade 2</SelectItem>
                      <SelectItem value="Grade 3">Grade 3</SelectItem>
                      <SelectItem value="Grade 4">Grade 4</SelectItem>
                      <SelectItem value="Grade 5">Grade 5</SelectItem>
                      <SelectItem value="Grade 6">Grade 6</SelectItem>
                      <SelectItem value="Grade 7">Grade 7</SelectItem>
                      <SelectItem value="Grade 8">Grade 8</SelectItem>
                      <SelectItem value="Grade 9">Grade 9</SelectItem>
                      <SelectItem value="Grade 10">Grade 10</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.grade && (
                    <p className="mt-1 text-sm text-red-600">{errors.grade}</p>
                  )}
                </div>

                <div className="grid w-full items-center">
                  <Label htmlFor="currentSchool" className="mb-2">
                    Current School (if applicable)
                  </Label>
                  <Input
                    id="currentSchool"
                    type="text"
                    value={formData.currentSchool}
                    onChange={(e) => handleChange("currentSchool", e.target.value)}
                    placeholder="Name of current school"
                  />
                </div>

                <div className="grid w-full items-center">
                  <Label htmlFor="message" className="mb-2">
                    Additional Information
                  </Label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Any additional information you'd like to share"
                    className="min-h-[100px] w-full rounded-md border border-border-primary px-3 py-2"
                    rows="4"
                  />
                </div>

                <Button
                  type="submit"
                  title="Submit application"
                  variant="primary"
                  size="sm"
                  className="items-center justify-center px-6 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit application"}
                </Button>
              </form>
              <p className="text-xs">
                We respect your privacy and will only use this information for
                admissions purposes.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/images/school photo.jpg"
              className="w-full object-cover"
              alt="Benchmark School System campus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
