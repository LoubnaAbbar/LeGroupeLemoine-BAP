const imgLogoLinkedin = "https://www.figma.com/api/mcp/asset/04dbea02-4db3-478c-b37b-948ea72a4237";
const imgLogoInstagram = "https://www.figma.com/api/mcp/asset/5cefc067-9185-4044-9df5-a28bc80871c6";
const imgLogoFacebook = "https://www.figma.com/api/mcp/asset/c1b5b87c-720b-4f43-8d4b-638add5d6345";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-gray-200" style={{ height: "133px" }}>
      <div className="absolute top-0 left-0 right-0 h-[133px] bg-[#FFFFFF] flex items-center px-[210px] justify-between">
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img src={imgLogoFacebook} alt="Facebook" className="w-[17px] h-[18px] object-contain" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={imgLogoInstagram} alt="Instagram" className="w-[21px] h-[21px] object-contain" />
          </a>

          <a
            href="https://www.linkedin.com/company/groupe-lemoine/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={imgLogoLinkedin} alt="LinkedIn" className="w-[29px] h-[30px] object-contain" />
          </a>
        </div>

        <p
          className="text-[20px] text-black"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          © 2026 Groupe Lemoine. All rights reserved
        </p>
      </div>
    </footer>
  );
}