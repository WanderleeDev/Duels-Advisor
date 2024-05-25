import GithubOutlined from "@ant-design/icons/GithubOutlined";
import LinkedinFilled from "@ant-design/icons/LinkedinFilled";
import MailFilled from "@ant-design/icons/MailFilled";
import { ConfigProvider, Tooltip } from "antd";
import {
  ISocialMedia,
  SocialMedia,
} from "../interfaces/ISocialMedia.interface";

export default function Contact() {
  const socialMedia: ISocialMedia = {
    github: "https://github.com/WanderleeDev",
    linkedin: "https://www.linkedin.com/in/wanderlee-max/",
    mail: "mailto:wanderleedev@gmail.com",
  };

  return (
    <article className="grid gap-4 py-4">
      <div className="flex flex-wrap gap-6 justify-between items-center sm:flex-nowrap">
        <img
          loading="lazy"
          className="aspect-square size-44 rounded-full mx-auto sm:size-40 bg-gray-300"
          src="https://www.dropbox.com/scl/fi/e6v1hpgp0kuu9jegn8znf/avatar.webp?rlkey=6dn016nqy9fbydgt6ffqzvrlk&st=6jug2pte&raw=1"
          alt=" my avatar"
        />
        <div>
          <h2 className="font-semibold">Wanderlee Max:</h2>
          <p className="sm:text-pretty">
            Let's get in touch to develop a project together and share
            knowledge. Be waiting for your contact.
          </p>
        </div>
      </div>
      <div className="flex gap-6 sm:justify-self-end pr-2">
        <ConfigProvider>
          {Object.keys(socialMedia).map((social) => (
            <Tooltip key={social} className="capitalize" title={social} placement="bottom">
              <a
                className="text-4xl capitalize"
                href={socialMedia[social]}
                target={social === SocialMedia.mail ? "_self" : "_blank"}
                rel="noopener noreferrer"
              >
                {social === SocialMedia.github && <GithubOutlined />}
                {social === SocialMedia.linkedin && <LinkedinFilled />}
                {social === SocialMedia.mail && <MailFilled />}
              </a>
            </Tooltip>
          ))}
        </ConfigProvider>
      </div>
    </article>
  );
}
