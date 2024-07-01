"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewProductCard } from "./product-card";

export default function SubmitToolForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    toolName: "",
    shortDescription: "",
    longDescription: "",
    logo: null,
    image: null,
    tags: [],
    websiteLink: "",
    tutorial: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  const [isFormValid, setIsFormValid] = useState(false);

  // This code didn't work for image previews:
  // const handleInputChange = (e) => {
  //   const { name, value, files } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: files ? files[0] : value,
  //   }));
  //   console.log(formData);
  // };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      const file = files[0];
      setFormData((prevData) => ({
        ...prevData,
        [name]: file,
      }));

      if (name === "image") {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleTagsChange = (tags) => {
    setFormData((prevData) => ({
      ...prevData,
      tags,
    }));
  };

  useEffect(() => {
    const {
      shortDescription,
      name,
      email,
      toolName,
      logo,
      image,
      tags,
      websiteLink,
      tutorial,
    } = formData;

    const isValid =
      shortDescription.length <= 250 &&
      name.trim() !== "" &&
      email.trim() !== "" &&
      toolName.trim() !== "" &&
      logo !== null &&
      image !== null &&
      tags.length > 0 &&
      websiteLink.trim() !== "" &&
      tutorial.trim() !== "";

    setIsFormValid(isValid);
  }, [formData]);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 max-w-6xl mx-auto py-12 px-4">
      <div className="space-y-6">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name (this won't be shown on your listing)"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email (this won't be shown on your listing)"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="toolName">Tool Name</Label>
          <Input
            id="toolName"
            name="toolName"
            type="text"
            placeholder="Enter the tool's name"
            value={formData.toolName}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="shortDescription">Short Description</Label>
          <Textarea
            id="shortDescription"
            name="shortDescription"
            placeholder="Enter a short description (to be shown on your preview card - max 250 characters)"
            value={formData.shortDescription}
            onChange={handleInputChange}
            className="resize-none"
            maxLength={250}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="longDescription">Long Description</Label>
          <Textarea
            id="longDescription"
            name="longDescription"
            placeholder="Enter a long description (to be shown on your product's page)"
            value={formData.longDescription}
            onChange={handleInputChange}
            className="resize-none"
            rows={5}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="deal">Deal</Label>
          <Textarea
            id="deal"
            name="deal"
            placeholder="If you have a deal/promo for your tool, enter it here! (example: 33% off with coupon 'EXAMPLE')"
            value={formData.deal}
            onChange={handleInputChange}
            className="resize-none"
            maxLength={250}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="logo">Tool Logo</Label>
          <Input
            id="logo"
            name="logo"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="image">Tool Image</Label>
          <Input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="tags">Tags</Label>
          <div />
        </div>
        <div className="space-y-1">
          <Label htmlFor="websiteLink">Website Link</Label>
          <Input
            id="websiteLink"
            name="websiteLink"
            type="url"
            placeholder="Enter the tool's website link"
            value={formData.websiteLink}
            onChange={handleInputChange}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="tutorial">Tutorial</Label>
          <Textarea
            id="tutorial"
            name="tutorial"
            placeholder="Talk about how to use the tutorial (to be shown on your product's page)"
            value={formData.tutorial}
            onChange={handleInputChange}
            className="resize-none"
            rows={5}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1>Preview Your Tool</h1>
        <h3>This is what your posting will look like.</h3>

        <NewProductCard
          image={previewImage}
          name={formData.toolName || ""}
          shortDescription={formData.shortDescription || ""}
          deal={formData.deal || ""}
          website={formData.websiteLink || ""}
        />
      </div>
      <Button disabled={!isFormValid} className="ml-auto">
        Continue to Checkout
      </Button>
    </div>
  );
}
