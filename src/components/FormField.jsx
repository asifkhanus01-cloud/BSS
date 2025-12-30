/**
 * Reusable Form Field Component
 * Works with React Hook Form
 */
import React from "react";
import { Input, Label, Textarea, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@relume_io/relume-ui";

export function FormField({ 
    label, 
    name, 
    type = "text", 
    placeholder, 
    required = false,
    error,
    register,
    options = [],
    rows = 3,
    className = ""
}) {
    const inputId = `field-${name}`;
    const isSelect = type === "select";
    const isTextarea = type === "textarea";

    return (
        <div className={`grid w-full items-center ${className}`}>
            <Label htmlFor={inputId} className="mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            
            {isSelect ? (
                <Select 
                    value={register ? register(name).value : ""} 
                    onValueChange={(value) => register && register(name).onChange({ target: { value } })}
                >
                    <SelectTrigger id={inputId}>
                        <SelectValue placeholder={placeholder || `Select ${label}`} />
                    </SelectTrigger>
                    <SelectContent>
                        {options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            ) : isTextarea ? (
                <Textarea
                    id={inputId}
                    placeholder={placeholder}
                    rows={rows}
                    {...(register ? register(name) : {})}
                    className={error ? "border-red-500" : ""}
                />
            ) : (
                <Input
                    id={inputId}
                    type={type}
                    placeholder={placeholder}
                    {...(register ? register(name) : {})}
                    className={error ? "border-red-500" : ""}
                />
            )}
            
            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
}

