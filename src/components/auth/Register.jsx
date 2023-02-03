import { AppContainer, Button, BackButton, SeparatorOr, TextLink, AuthPageTitle } from "../common"

function Register() {
    return (
        <AppContainer>
            <div className="px-8 pt-12">
                <BackButton />
                <AuthPageTitle primaryText="عضویت" secondaryText="فقط چند دقیقه تا ساخت اکانت جدید" />
            </div>

            <form action="#" className="mt-6 mx-8">
                <label htmlFor="emailAddress" className="text-[16px] text-[#6F7582]">آدرس ایمیل</label>
                <input
                    type="text"
                    id="emailAddress"
                    className="block mt-2 text-[15px] p-4 rounded-[12px] w-full bg-transparent outline-none text-white border-2 border-[#31394C] text-left"
                />
                <div id="emailErr" className="text-left text-[13px] text-[#FF004E] hidden mt-1 font-semibold">لطفا آدرس درست را درچ کنید</div>

                <label htmlFor="password" className="text-[16px] text-[#6F7582] mt-4 block"
                >رمز عبور</label
                >
                <div className="relative flex items-center">
                    <div id="toggleInputType" className="absolute bg-[#212735] px-4 right-[2px] bottom-[2px] top-4 pb-[6px] flex items-center rounded-2xl">
                        <img src="/svg/vuesax-bulk-eye-slash.svg" alt="" />
                    </div>
                    <input
                        type="password"
                        id="password"
                        className="block tracking-[5px] mt-2 text-[15px] p-4 rounded-[12px] w-full bg-transparent outline-none text-white border-2 border-[#31394C] text-left"
                    />
                </div>
            </form>

            <div className="px-8 mt-14">
                <Button title="ثبت نام" />
                <SeparatorOr />
                <Button title="ثبت نام با گوگل" type="secondary" icon="/svg/search.svg" />
                <TextLink text="حساب کاربری دارید ؟" linkText="وارد شوید" linkUrl="/login" />
            </div>
        </AppContainer>
    )
}

export default Register
