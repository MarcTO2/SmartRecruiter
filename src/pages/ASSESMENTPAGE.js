const ASSESMENTPAGE = () => {
  return (
    <div className="relative w-full h-[1028px] overflow-hidden bg-[url('/public/assesment-page@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-lightgoldenrodyellow font-inter">
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px] text-white">
        <span>{`SMART `}</span>
        <span className="text-dodgerblue">RECRUITOR</span>
      </div>
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px] text-white">
        <span>{`SMART `}</span>
        <span className="text-dodgerblue">RECRUITOR</span>
      </div>
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px]">
        <span>SMART</span>
        <span className="text-white">{` `}</span>
        <span className="text-dodgerblue">RECRUITOR</span>
      </div>
      <div className="absolute top-[47px] left-[58px] font-medium inline-block w-[360px] h-[29px]">
        <span>SMART</span>
        <span className="text-white">{` `}</span>
        <span className="text-deepskyblue">RECRUITOR</span>
      </div>
      <div className="absolute top-[47px] left-[888px] font-medium inline-block w-[106px] h-[21px]">
        HOME
      </div>
      <div className="absolute top-[47px] left-[888px] font-semibold text-deepskyblue inline-block w-[106px] h-[21px]">
        HOME
      </div>
      <div className="absolute top-[47px] left-[1097px] font-medium inline-block w-[106px] h-[21px]">
        ABOUT
      </div>
      <div className="absolute top-[47px] left-[1271px] font-medium inline-block w-[106px] h-[21px]">
        <p className="m-0">PROFILE</p>
      </div>
      <div className="absolute top-[183px] left-[64px] rounded-xl bg-darkslategray box-border w-[347px] h-[740px] border-[2px] border-solid border-lightgoldenrodyellow" />
      <div className="absolute top-[270px] left-[105px] text-xl font-semibold text-deepskyblue inline-block w-[234px] h-[29px]">
        Assessments
      </div>
      <div className="absolute top-[385px] left-[105px] text-xl font-semibold text-deepskyblue inline-block w-[234px] h-[29px]">
        Feedback
      </div>
      <div className="absolute top-[183px] left-[477px] rounded-3xs bg-darkslategray box-border w-[911px] h-[740px] border-[2px] border-solid border-lightgoldenrodyellow" />
      <img
        className="absolute top-[310px] left-[671px] rounded-3xs w-[578px] h-[356px]"
        alt=""
        src="/rectangle-6.svg"
      />
      <div className="absolute top-[408px] left-[750px] text-xl font-semibold text-deepskyblue">
        <span>DATE</span>
        <span className="text-white">:</span>
      </div>
      <div className="absolute top-[516px] left-[754px] text-xl font-semibold text-deepskyblue">
        <span>DURATION</span>
        <span className="text-white">:</span>
      </div>
      <div className="absolute top-[408px] left-[865px] text-xl font-semibold">
        DD/MM/YYYY
      </div>
      <div className="absolute top-[516px] left-[884px] text-xl font-semibold">
        <p className="[margin-block-start:0] [margin-block-end:1px]">
          2HRS 30 MINS
        </p>
      </div>
      <div className="absolute top-[722px] left-[calc(50%_-_30px)] rounded-3xs bg-gray box-border w-[205px] h-[51px] border-[2px] border-solid border-limegreen-200" />
      <div className="absolute top-[736px] left-[720px] text-xl font-semibold text-limegreen-100">
        DEMO KATA
      </div>
      <div className="absolute top-[722px] left-[1018px] rounded-3xs bg-gray box-border w-[173px] h-[51px] border-[2px] border-solid border-limegreen-200" />
      <div className="absolute top-[736px] left-[1043px] text-xl font-semibold text-limegreen-100">
        START KATA
      </div>
    </div>
  );
};

export default ASSESMENTPAGE;
