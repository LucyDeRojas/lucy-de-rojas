
import Menu from "./Menu";
import Ldr from "./Ldr";
import Logo from "./Logo";
import MenuBurger from "./Menu-Burger";









export default function TopHeader() {






        return (<div className="flex w-full items-center justify-between sticky top-0 z-10 bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.15)]">


                <MenuBurger />
                <Menu />

                {/* <Ldr  /> */}
                <Logo />








        </div>);}