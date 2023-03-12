import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const EmailLinkRender = ({ children }) => (
  <span>
    {children} <MdOutlineEmail />
  </span>
);

export default {
  name: "EmailLink",
  title: "Email link",
  type: "object",
  description: "Adds an email link",
  icon: MdOutlineEmail,
  fields: [
    {
      name: "email",
      title: "Email address",
      type: "string",
      validation: (Rule) =>
        Rule.custom((email) => {
          if (typeof email === "undefined") {
            return true; // Allow undefined values
          }

          return email
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
            ? true
            : "This is not an email";
        }),
    },
  ],
  blockEditor: {
    icon: () => "🔗",
    render: EmailLinkRender,
  },
  preview: {
    select: {
      title: "email",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
        subtitle: "Email link",
      };
    },
  },
  displayName: "EmailLink",
};
