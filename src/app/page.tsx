import { Layout } from "@/components/Layout/Layout";
import socials from "@/data/socials.json";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const emoji = (unicode: string) => {
  // Pastikan nilai Unicode tidak null atau undefined
  if (!unicode) return "";

  // Ubah kode Unicode menjadi titik kode
  const codePoint = parseInt(unicode, 16);

  // Periksa apakah titik kode valid
  if (isNaN(codePoint) || codePoint < 0x10000 || codePoint > 0x10ffff) {
    console.error("Invalid Unicode code point:", unicode);
    return "";
  }

  // Kembalikan karakter emoji dari titik kode
  return String.fromCodePoint(codePoint);
};

export default function HomePage() {
  const renderSocialIcon = (social: string) => {
    const style =
      "w-6 h-6 hover:text-neutral-700 hover:dark:text-neutral-200 transition duration-300";

    if (social === "Twitter") {
      return <FaTwitter className={style} />;
    } else if (social === "Instagram") {
      return <FaInstagram className={style} />;
    } else if (social === "Github") {
      return <FaGithub className={style} />;
    } else if (social === "LinkedIn") {
      return <FaLinkedin className={style} />;
    }
  };

  return (
    <Layout className="flex items-center">
      <div className="w-full flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-24 px-4 sm:px-8 md:px-12 lg:px-4">
        <div className="relative aspect-square w-28 sm:w-36 md:w-44 lg:w-[480px] rounded-full overflow-hidden outline outline-4 outline-neutral-200 dark:outline-neutral-700 shadow">
          <Image
            src="/me.jpg"
            alt="me"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover object-[50%_20%]"
          />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="absolt text-3xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100 font-bold">
            From Front-End <span className="wave-emoji">{emoji("1F44B")}</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100 font-bold">
            to Back-End.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 md:text-lg mt-1 lg:mt-2">
            I software engineer who has one year of experience as a Front-End
            and Back-End web developer. I always eager to keep up with the
            industry and keep improving my skills.
          </p>
          <ul className="flex items-center justify-center lg:justify-start mt-5 lg:mt-7 gap-4 text-neutral-500 dark:text-neutral-400">
            {socials.map((social, index) => (
              <li key={index}>
                <Link
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}>
                  {renderSocialIcon(social.name)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
