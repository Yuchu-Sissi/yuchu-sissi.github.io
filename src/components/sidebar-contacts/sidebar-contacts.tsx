import React, { type FC, useState } from "react";

import { Icon } from "@/components/icon";
import { ContactDialog } from "@/components/contact-dialog/contact-dialog";
import { icons } from "@/constants/icons";
import { getIcon } from "@/utils/get-icon";
import { getContactHref } from "@/utils/get-contact-href";

import * as styles from "./sidebar-contacts.module.scss";

type SidebarContactsProps = {
  contacts: {
    name: keyof typeof icons;
    contact: string;
  }[];
};

const SidebarContacts: FC<SidebarContactsProps> = ({ contacts }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const emailContact = contacts.find(c => c.name === "email");

  return (
    <>
      {contacts.length > 0 && (
        <div className={styles.sidebarContacts}>
          <ul className={styles.list}>
            {contacts.map(
              ({ name, contact }) => (
                <li className={styles.item} key={name}>
                  {name === "email" ? (
                    <span
                      className={styles.link}
                      onClick={() => setDialogOpen(true)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setDialogOpen(true)}
                    >
                      <Icon name={name} icon={getIcon(name)} />
                    </span>
                  ) : (
                    <a
                      target="_blank"
                      className={styles.link}
                      href={getContactHref(name, contact)}
                      rel={`noopener noreferrer${name === "mastodon" ? " me" : ""}`}
                    >
                      <Icon name={name} icon={getIcon(name)} />
                    </a>
                  )}
                </li>
              ),
            )}
          </ul>
        </div>
      )}
      {emailContact && (
        <ContactDialog
          isOpen={dialogOpen}
          onClose={() => setDialogOpen(false)}
          email={emailContact.contact}
        />
      )}
    </>
  );
};

export { SidebarContacts };
