import { AppContainer, Button, BackButton, SeparatorOr, TextLink, AuthPageTitle } from "../common"

function Login() {
  return (
    <AppContainer>
      <div className="px-8 pt-12">
        <BackButton />
        <AuthPageTitle primaryText="ورود" secondaryText="دلتنگ شما بودیم" />
      </div>

      <form action="#" className="mt-6 mx-8">
        <label htmlFor="loginEmailAddress" className="text-[16px] text-[#6F7582]">آدرس ایمیل</label>
        <input
          type="text"
          id="loginEmailAddress"
          className="block mt-2 text-[15px] p-4 rounded-[12px] w-full bg-transparent outline-none text-white border-2 border-[#31394C] text-left"
        />
        <div id="loginEmailErr" className="text-left text-[13px] text-[#FF004E] hidden mt-1 font-semibold">لطفا آدرس درست را درچ کنید</div>

        <label htmlFor="loginPassword" className="text-[16px] text-[#6F7582] mt-4 block"
        >رمز عبور</label>
        <div className="relative flex items-center">
          <div id="loginToggleInputType" className="absolute bg-[#212735] px-4 right-[2px] bottom-[2px] top-4 pb-[6px] flex items-center rounded-2xl">
            <img src="/svg/vuesax-bulk-eye-slash.svg" alt="" />
          </div>
          <input
            type="password"
            id="loginPassword"
            className="block tracking-[5px] mt-2 text-[15px] p-4 rounded-[12px] w-full bg-transparent outline-none text-white border-2 border-[#31394C] text-left"
          />
        </div>
        <a href="#" className="font-semibold text-[#2CCD70] mr-1 text-[15px] text-left block mt-4">فراموشی کلمه عبور؟</a>
      </form>

      <div className="px-8 mt-14">
        <Button title="ورود" />
        <SeparatorOr />
        <Button title="ورود با گوگل" type="secondary" icon="/svg/search.svg" />
        <TextLink text="عضو نیستید ؟" linkText="ثبت نام کنید" linkUrl="/register" />
      </div>
    </AppContainer>
  )
}

export default Login
