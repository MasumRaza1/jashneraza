export default {
    name: "volunteer",
    type: "document",
    title: "Volunteer",
    fields: [
      {
        name: "volunteerId",
        type: "number",
        title: "Volunteer ID",
        readOnly: true,
      },
      {
        name: "name",
        type: "string",
        title: "Full Name",
        validation: (Rule) => Rule.required().min(8),
      },
      {
        name: "phone",
        type: "string",
        title: "Phone Number",
        validation: (Rule) =>
          Rule.required()
            .regex(/^[0-9]{10}$/, {
              name: "Phone Number",
              invert: false,
            })
            .error("Phone number must be 10 digits"),
      },
      {
        name: "email",
        type: "string",
        title: "E-mail",
        validation: (Rule) => Rule.required().email(),
      },
      {
        name: "address",
        type: "string",
        title: "Address",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "preferredRole",
        type: "string",
        title: "Preferred Role",
        options: {
          list: [
            { title: "Event Support", value: "eventSupport" },
            { title: "Fundraising", value: "fundraising" },
            { title: "Social Media", value: "socialMedia" },
            { title: "Teaching", value: "teaching" },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "areaOfInterest",
        type: "string",
        title: "Area of Interest",
        options: {
          list: [
            { title: "Faizan-e-Raza (Learning Quran)", value: "faizan-e-raza" },
            { title: "Shifa-e-Raza (Health Camp)", value: "shifa-e-raza" },
            { title: "Jashn-e-Raza (Events)", value: "jashn-e-raza" },
            { title: "Kalam-e-Raza (E-books & Literature)", value: "kalam-e-raza" },
          ],
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "profilePicture",
        type: "image",
        title: "Profile Picture",
        options: { hotspot: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: "approved",
        type: "boolean",
        title: "Approved by Admin",
        description: "Only approved volunteers will be displayed on the website",
        initialValue: false,
      },
    ],
  
    // Auto-generate Volunteer ID before document is created
    preview: {
      select: {
        title: "name",
        subtitle: "volunteerId",
      },
      prepare({ title, subtitle }) {
        return {
          title,
          subtitle: `Volunteer ID: ${subtitle || "Generating..."}`,
        };
      },
    },
  };
  