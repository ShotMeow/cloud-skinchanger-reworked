import NavLinks from "./NavLinks/NavLinks"
import Social from "./Social/Social"
import Support from "./Support/Support"
import UsersLinks from "./UsersLinks/UsersLinks"


const Footer = () => {
    return (
        <footer className="p-4 bg-[#060606]">
            <div className="container mx-auto flex flex-col justify-between gap-10 py-4 lg:flex-row">
                <Social />
                <Support />
                <NavLinks />
                <UsersLinks />
            </div>
            <p className="text-center mt-6 mb-3">© 2022 Cloud Skinchanger. Все права защищены.</p>
        </footer>
    )
}

export default Footer