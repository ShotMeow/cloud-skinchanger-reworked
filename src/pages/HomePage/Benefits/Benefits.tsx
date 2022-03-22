import Button from "../../../components/Button/Button"

const Benefits = () => {
    return (
        <div className="bg-[#0A0A0A] my-8">
            <div className="container mx-auto px-4 py-10 grid items-center lg:grid-cols-2 gap-8 lg:flex-row">
                <div className="flex flex-col items-start gap-5">
                    <h2 className="text-2xl font-bold">Преимущества</h2>
                    <p className="text-[#B0B0B0]">Наш Skinchanger является наиболее продвинутым для Dota 2. Он включает в себя полный набор существующих скинов, а так-же авторские нововведения. Мы обеспечиваем нашим клиентам максимальную безопасность и обратную связь 24/7.</p>
                    <Button type="secondary">Написать поддержке</Button>
                </div>
                <ul className="flex flex-col gap-5 justify-self-end">
                    <li className="flex items-center gap-4">
                        <div className="rounded w-9 h-9 bg-[#CF2C2C] flex items-center justify-center">
                            <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8267 0.76001L0.373337 5.39274V12.3418C0.373337 18.7697 4.83343 24.7807 10.8267 26.24C16.8199 24.7807 21.28 18.7697 21.28 12.3418V5.39274L10.8267 0.76001ZM10.8267 13.4884H18.957C18.3415 18.2601 15.1474 22.5107 10.8267 23.8426V13.5H2.6963V6.89837L10.8267 3.29643V13.4884Z" fill="white" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-md">Максимальная надежность</h3>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="rounded w-9 h-9 bg-[#CF2C2C] flex items-center justify-center">
                            <svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.6444 3.27776V0.686096H3.54998V3.27776H0.958313V14.5083H7.86942V11.0528H11.325V14.5083H18.2361V3.27776H15.6444ZM8.73331 5.86943H7.00554V6.73332H8.73331V7.59721H6.14165V5.00554H7.86942V4.14165H6.14165V3.27776H8.73331V5.86943ZM13.0528 7.59721H12.1889V5.86943H10.4611V3.27776H11.325V5.00554H12.1889V3.27776H13.0528V7.59721Z" fill="white" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-md">Удобное управление</h3>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="rounded w-9 h-9 bg-[#CF2C2C] flex items-center justify-center">
                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0528 0.413879L15.0311 2.39218L10.8153 6.60796L7.35973 3.15241L0.958313 9.56246L2.1764 10.7805L7.35973 5.59721L10.8153 9.05277L16.2578 3.61891L18.2361 5.59721V0.413879H13.0528Z" fill="white" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-md">Оптимизация для слабых ПК</h3>
                    </li>
                    <li className="flex items-center gap-4">
                        <div className="rounded w-9 h-9 bg-[#CF2C2C] flex items-center justify-center">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6444 8.59727V14.6445H2.54998V8.59727H0.822205V14.6445C0.822205 15.5948 1.5997 16.3723 2.54998 16.3723H14.6444C15.5947 16.3723 16.3722 15.5948 16.3722 14.6445V8.59727H14.6444ZM9.46109 9.17607L11.6986 6.94724L12.9166 8.16532L8.5972 12.4848L4.27776 8.16532L5.49584 6.94724L7.73332 9.17607V0.822266H9.46109V9.17607Z" fill="white" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-md">Сохранение в облаке</h3>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Benefits