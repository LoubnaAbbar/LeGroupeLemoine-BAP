const imgLogoLinkedin = "https://www.figma.com/api/mcp/asset/04dbea02-4db3-478c-b37b-948ea72a4237";
const imgLogoInstagram = "https://www.figma.com/api/mcp/asset/5cefc067-9185-4044-9df5-a28bc80871c6";
const imgLogoFacebook = "https://www.figma.com/api/mcp/asset/c1b5b87c-720b-4f43-8d4b-638add5d6345";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white border-t border-gray-200">
      <div className="w-full min-h-[133px] bg-[#FFFFFF] flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 md:gap-0 px-4 sm:px-6 md:px-10 lg:px-[210px] py-6 md:py-0">
        {/* Social Media Icons */}
        <div className="flex items-center gap-6 md:gap-3 order-2 md:order-1">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-70 transition-opacity"
          >
            <img 
              src={imgLogoFacebook} 
              alt="Facebook" 
              className="w-[17px] h-[18px] object-contain" 
            />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-70 transition-opacity"
          >
            <img 
              src={imgLogoInstagram} 
              alt="Instagram" 
              className="w-[21px] h-[21px] object-contain" 
            />
          </a>

          <a
            href="https://www.linkedin.com/company/groupe-lemoine/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:opacity-70 transition-opacity"
          >
            <img 
              src={imgLogoLinkedin} 
              alt="LinkedIn" 
              className="w-[29px] h-[30px] object-contain" 
            />
          </a>
        </div>

        {/* Copyright Text */}
        <p
          className="text-sm sm:text-base md:text-[20px] text-black text-center order-1 md:order-2"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400 }}
        >
          © 2026 Groupe Lemoine. All rights reserved
        </p>
      </div>
    </footer>
  );
}