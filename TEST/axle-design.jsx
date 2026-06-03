const imgIcon = "https://www.figma.com/api/mcp/asset/6e08e12b-e8f6-433c-be97-fd97d91daf17";
const imgAboutHero = "https://www.figma.com/api/mcp/asset/704b9295-ba98-410c-9489-288fb7e53d8c";
const imgRectangle3170 = "https://www.figma.com/api/mcp/asset/9dda3cd5-924d-4781-a617-f6f4a7eb3c0c";
const imgRectangle3172 = "https://www.figma.com/api/mcp/asset/1a97d670-cdd5-4f45-ac86-7a36e64947b7";
const imgPeople = "https://www.figma.com/api/mcp/asset/e7d18e44-afa9-4f90-9aa4-3b05137014c4";
const imgExecution = "https://www.figma.com/api/mcp/asset/9ec16a04-2754-49dd-8448-77221a7d1a48";
const imgIntegrity = "https://www.figma.com/api/mcp/asset/e667a3b6-75b2-4476-a717-2acf67ce4808";
const imgLinkedin4 = "https://www.figma.com/api/mcp/asset/0ee93fc2-a219-43e6-af98-5be5909493eb";
const imgFacebook6 = "https://www.figma.com/api/mcp/asset/cd50fff4-9759-4269-995c-f3e3eb8270fe";
const imgInstagram22 = "https://www.figma.com/api/mcp/asset/44672538-e2c9-4183-b890-f2e4ac8f5f1b";
const imgBehance2 = "https://www.figma.com/api/mcp/asset/85c788c9-4333-45ff-97f5-b36dda48785a";
const imgWhiteLogoWithText3 = "https://www.figma.com/api/mcp/asset/86cf1a68-b45e-4748-bdfe-b57f591701f9";
const imgGroup1000007960 = "https://www.figma.com/api/mcp/asset/0d797469-d8bb-4eba-8711-8e4217e4d689";
const imgEllipse50 = "https://www.figma.com/api/mcp/asset/18efbf3a-765f-449c-88ac-749d9498f1b9";
const imgGroup1000008062 = "https://www.figma.com/api/mcp/asset/6fd0a630-d2b0-4662-8bae-6d0416a49569";
const imgEllipse55 = "https://www.figma.com/api/mcp/asset/ce527428-50a9-4f9a-bb78-6e1f404670a6";
const imgEllipse54 = "https://www.figma.com/api/mcp/asset/a3e16f79-969d-4b52-9e52-495ed652594c";
const imgEllipse56 = "https://www.figma.com/api/mcp/asset/8d5b15cd-ad4d-4d74-b726-97da9e3cf9d2";
const imgAxle = "https://www.figma.com/api/mcp/asset/819cbe65-223b-40d9-95b6-06c10693636d";
const imgEllipse48 = "https://www.figma.com/api/mcp/asset/02f9cb71-07ad-4aaf-a74b-313a956f12f4";
const imgEllipse49 = "https://www.figma.com/api/mcp/asset/64b3fb37-aa4f-4761-ab72-abd323e514ba";
const imgVector17 = "https://www.figma.com/api/mcp/asset/e9a35f8e-637c-4cef-99e1-ce18f3b5457d";
const imgEllipse53 = "https://www.figma.com/api/mcp/asset/c8fe1b28-e7ff-4b62-8cd2-08f0c4c345cd";
const imgEllipse57 = "https://www.figma.com/api/mcp/asset/4745c400-5b70-47b3-92c1-1e3e8ca192e1";
const imgVector18 = "https://www.figma.com/api/mcp/asset/2439b47f-9fc9-44fb-91f9-d234fe7c3154";
const imgGroup1000007926 = "https://www.figma.com/api/mcp/asset/80ba18aa-fd24-40f6-a5db-921fbee6bfd0";
const imgEllipse84 = "https://www.figma.com/api/mcp/asset/5cd6f998-0a4b-4bc0-a0bc-91bbf530b66a";
const imgVector16 = "https://www.figma.com/api/mcp/asset/070c2a75-e9e8-4de3-abeb-7a9d17441b76";
const imgEllipse59 = "https://www.figma.com/api/mcp/asset/9a9d1790-57e2-4fc7-bf3e-27d62f995942";
const imgGroup1000007906 = "https://www.figma.com/api/mcp/asset/92ad89a3-4c77-41f3-bab9-5d41c70f3967";
const imgGroup1000008037 = "https://www.figma.com/api/mcp/asset/71265dd7-5b2f-4539-bd1d-f3689bb5921d";
const imgGroup427321744 = "https://www.figma.com/api/mcp/asset/bce44690-7d03-4af9-891c-d1a26cb84540";
const imgEllipse51 = "https://www.figma.com/api/mcp/asset/219c7545-b699-445b-b94d-461e4f31ae3c";
const imgEllipse47 = "https://www.figma.com/api/mcp/asset/9456af7e-8dd0-431c-81c0-c03848cd7ef7";
const imgVector = "https://www.figma.com/api/mcp/asset/2f0668a0-12d5-4f9f-88e6-e5bcfc2b83cd";

type PlusProps = {
  className?: string;
  size?: "24";
};

function Plus({ className, size = "24" }: PlusProps) {
  return (
    <div className={className || "overflow-clip relative size-[24px]"} data-node-id="1:213">
      <div className="absolute inset-[20.83%]" data-node-id="1:214" data-name="Icon">
        <div className="absolute inset-[-8.93%]">
          <img alt="" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="bg-[#030712] relative size-full min-h-screen" data-node-id="1:961" data-name="About us">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Gordita:wght@400;500;600;700&display=swap');
        
        body {
          overflow-x: hidden;
        }
        
        .Gordita-Regular { font-family: 'Gordita', sans-serif; font-weight: 400; }
        .Gordita-Medium { font-family: 'Gordita', sans-serif; font-weight: 500; }
        .Gordita-Bold { font-family: 'Gordita', sans-serif; font-weight: 700; }
        .Poppins-Light { font-family: 'Poppins', sans-serif; font-weight: 300; }
        .Poppins-Regular { font-family: 'Poppins', sans-serif; font-weight: 400; }
      `}</style>
      
      {/* Decorative elements - background shapes */}
      <div className="absolute h-[419.169px] left-[calc(75%-14px)] top-[3570px] w-[549.396px]" data-node-id="1:962">
        <div className="absolute inset-[-47.71%_-29.25%_-36.31%_-36.4%]">
          <img alt="" className="block max-w-none size-full" src={imgGroup1000007960} />
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="absolute content-stretch flex gap-[474px] items-center justify-center left-[64px] top-[40px] w-[1312px] z-10" data-node-id="1:974" data-name="navbar">
        <div className="h-[33px] relative shrink-0 w-[113px]" data-node-id="I1:974;4895:180" data-name="Axle.">
          <img alt="Axle" className="absolute block inset-0 max-w-none size-full" src={imgAxle} />
        </div>
        <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-node-id="I1:974;4895:181">
          <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 text-[14px] text-white tracking-[0.7px] whitespace-nowrap" data-node-id="I1:974;4895:182">
            <a className="block cursor-pointer Gordita-Regular leading-[normal] relative shrink-0 uppercase hover:text-blue-400 transition-colors" data-node-id="I1:974;5785:1015">
              What We Build
            </a>
            <a className="block cursor-pointer Gordita-Regular leading-[normal] relative shrink-0 hover:text-blue-400 transition-colors">
              AXLE LAUNCH
            </a>
            <a className="block cursor-pointer Gordita-Regular leading-[normal] relative shrink-0 hover:text-blue-400 transition-colors">
              WORK
            </a>
            <p className="Gordita-Bold leading-[normal] relative shrink-0">
              ABOUT
            </p>
            <a className="block cursor-pointer Gordita-Regular leading-[normal] relative shrink-0 hover:text-blue-400 transition-colors">
              INSIGHTS
            </a>
          </div>
          <button className="bg-[#5182ff] border border-[#28292d] border-solid flex flex-col items-center justify-center px-[32px] py-[14px] relative rounded-[12px] shrink-0 hover:bg-blue-600 transition-colors">
            <p className="Gordita-Medium leading-[1.4] relative shrink-0 text-[13px] text-white tracking-[0.39px] uppercase">
              Book a call
            </p>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="absolute content-stretch flex flex-col gap-[96px] items-center left-0 pb-[200px] px-[64px] top-[166px] w-full" data-node-id="1:977" data-name="about us hero">
        <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1156px] max-w-[90%] mx-auto" data-node-id="1:978">
          <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 text-center text-white w-full" data-node-id="1:979">
            <p className="Gordita-Medium leading-[86px] relative shrink-0 text-[68px]" data-node-id="1:980">
              A Small Team Built For Serious Work
            </p>
            <p className="Poppins-Regular leading-[40px] relative shrink-0 text-[24px] tracking-[0.24px] w-[935px]" data-node-id="1:981">
              We're a small product build team based in Sri Lanka. We work with founders and growing businesses to design and build digital products, platforms, and internal tools — things that actually get used, not just launched.
            </p>
          </div>
          <button className="bg-[#5182ff] border border-[#28292d] border-solid flex flex-col items-center justify-center px-[32px] py-[18px] relative rounded-[12px] shrink-0 w-[310px] hover:bg-blue-600 transition-colors">
            <p className="Gordita-Medium leading-[normal] relative shrink-0 text-[13px] text-white tracking-[0.39px] uppercase">
              talk to our experts
            </p>
          </button>
        </div>
        <div className="h-[700px] relative rounded-[24px] shrink-0 w-full max-w-[1312px] mx-auto" data-node-id="1:984" data-name="about-hero">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgAboutHero} />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="absolute h-[379px] left-[64px] overflow-clip rounded-[24px] top-[6478px] w-[1312px]" data-node-id="1:1077">
        <div className="absolute border border-[rgba(81,130,255,0.25)] border-solid h-[379px] left-0 rounded-[24px] top-0 w-full" data-node-id="1:1078" style={{ backgroundImage: "linear-gradient(185.18deg, rgb(0, 0, 0) 67.55%, rgb(2, 52, 185) 107.74%)" }} />
        <div className="absolute content-stretch flex flex-col gap-[48px] items-center justify-center left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-center" data-node-id="1:1080">
            <div className="col-1 flex flex-col Gordita-Medium justify-center ml-0 mt-0 relative row-1 text-[48px] text-white w-[753px]" data-node-id="1:1081">
              <p className="leading-[70px]">Have Something Worth Building?</p>
            </div>
            <div className="col-1 Poppins-Regular h-[47px] ml-[157.5px] mt-[70px] relative row-1 text-[16px] text-[rgba(255,255,255,0.75)] w-[437px]" data-node-id="1:1082">
              <p className="leading-[normal]">If you are working on a product, system, or idea that needs to be built properly, let's talk.</p>
            </div>
          </div>
          <button className="bg-[#5182ff] border border-[#28292d] border-solid flex flex-col items-center justify-center px-[32px] py-[18px] relative rounded-[12px] shrink-0 w-[310px] hover:bg-blue-600 transition-colors">
            <p className="Gordita-Medium leading-[normal] relative shrink-0 text-[13px] text-white tracking-[0.39px] uppercase w-[168px]">
              Start a Conversation
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
