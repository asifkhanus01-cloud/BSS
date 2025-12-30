/**
 * Enhanced Contact Form using React Hook Form + Zod
 * Example implementation for form management enhancement
 */
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input, Label, RadioGroup, RadioGroupItem, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Textarea } from "@relume_io/relume-ui";
import { contactFormSchema } from "../utils/formSchemas";
import { handleFormSubmit } from "../utils/formValidation";
import { FormMessage } from "./FormMessage";
import { schoolInfo } from "../data/schoolInfo";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";

export function ContactFormEnhanced() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch
    } = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            inquiry: "",
            connection: "",
            message: "",
            terms: false
        }
    });

    const [submitMessage, setSubmitMessage] = React.useState(null);

    const onSubmit = async (data) => {
        setSubmitMessage(null);
        const result = await handleFormSubmit(data, "contact");
        setSubmitMessage(result);
        
        if (result.success) {
            reset();
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
                            <p>{schoolInfo.contact.email}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <BiPhone className="size-6 flex-none" />
                            <p>{schoolInfo.contact.phone}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <BiMap className="size-6 flex-none" />
                            <p>{schoolInfo.contact.address}</p>
                        </div>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit(onSubmit)} className="grid max-w-lg grid-cols-1 grid-rows-[auto_auto] gap-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="grid w-full items-center">
                            <Label htmlFor="firstName" className="mb-2">
                                First name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="firstName"
                                type="text"
                                {...register("firstName")}
                                className={errors.firstName ? "border-red-500" : ""}
                            />
                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                            )}
                        </div>
                        <div className="grid w-full items-center">
                            <Label htmlFor="lastName" className="mb-2">
                                Last name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="lastName"
                                type="text"
                                {...register("lastName")}
                                className={errors.lastName ? "border-red-500" : ""}
                            />
                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="grid w-full items-center">
                            <Label htmlFor="email" className="mb-2">
                                Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email")}
                                className={errors.email ? "border-red-500" : ""}
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="grid w-full items-center">
                            <Label htmlFor="phone" className="mb-2">
                                Phone number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="e.g., 03XX-XXXXXXX"
                                {...register("phone")}
                                className={errors.phone ? "border-red-500" : ""}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                            )}
                        </div>
                    </div>
                    
                    <div className="grid w-full items-center">
                        <Label className="mb-2">What is your inquiry about? <span className="text-red-500">*</span></Label>
                        <Select
                            value={watch("inquiry") || ""}
                            onValueChange={(value) => {
                                const { onChange } = register("inquiry");
                                onChange({ target: { value } });
                            }}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select topic" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="admissions">Admissions</SelectItem>
                                <SelectItem value="academics">Academics</SelectItem>
                                <SelectItem value="fees">Fee Structure</SelectItem>
                                <SelectItem value="careers">Careers</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.inquiry && (
                            <p className="text-red-500 text-sm mt-1">{errors.inquiry.message}</p>
                        )}
                    </div>
                    
                    <div className="grid w-full items-center py-3 md:py-4">
                        <Label className="mb-3 md:mb-4">
                            How are you connected to Benchmark? <span className="text-red-500">*</span>
                        </Label>
                        <RadioGroup
                            value={watch("connection") || ""}
                            onValueChange={(value) => {
                                const { onChange } = register("connection");
                                onChange({ target: { value } });
                            }}
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
                                <RadioGroupItem value="other" id="other-connection" />
                                <Label htmlFor="other-connection">Other</Label>
                            </div>
                        </RadioGroup>
                        {errors.connection && (
                            <p className="text-red-500 text-sm mt-1">{errors.connection.message}</p>
                        )}
                    </div>
                    
                    <div className="grid w-full items-center">
                        <Label htmlFor="message" className="mb-2">
                            Message <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Share your message here"
                            {...register("message")}
                            className={`min-h-[11.25rem] overflow-auto ${errors.message ? "border-red-500" : ""}`}
                        />
                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                    </div>
                    
                    <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
                        <Checkbox
                            id="terms"
                            checked={watch("terms") || false}
                            onCheckedChange={(checked) => {
                                const { onChange } = register("terms");
                                onChange({ target: { checked } });
                            }}
                        />
                        <Label htmlFor="terms" className="cursor-pointer">
                            I agree to the terms <span className="text-red-500">*</span>
                        </Label>
                    </div>
                    {errors.terms && (
                        <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
                    )}
                    
                    <div>
                        <Button type="submit" title="Send" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send"}
                        </Button>
                        <FormMessage type={submitMessage?.type} message={submitMessage?.message} />
                    </div>
                </form>
            </div>
        </section>
    );
}

