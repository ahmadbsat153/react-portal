import {
    DocumentChartBarIcon,
    CogIcon,
    HomeIcon,
    PhotoIcon,
    GlobeAltIcon,
    ArrowDownIcon,
    Squares2X2Icon,
    UserGroupIcon,
    XMarkIcon,
    HiLogout,
    Bars3Icon,
    BookmarkSquareIcon,
    UserMinusIcon,
    DocumentMagnifyingGlassIcon,
    PencilIcon,
    UsersIcon,
    ArrowRightOnRectangleIcon,
    PencilSquareIcon,
    QuestionMarkCircleIcon,
    ArrowLeftOnRectangleIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "react-headless-accordion";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import tiger from "../assets/pictures/tiger.png";
import JAIX from "../assets/partners/JAIX.webp";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import SupportModal from "@/Pages/Component/modals/SupportModal";

export default function MainSidebar({
    setMobileMenuOpen,
    mobileMenuOpen,
    setactivePage,
    setActiveIndexInv,
    currentUser,
    setActiveIndexGTRS,
    activePage,
}) {
    const invoicesRoles = [6, 7, 8, 9 , 10];
    const [gtrsCurrent, setGtrsCurrent] = useState();
    function checkUserRoleInvoices(currentUser) {
        const roleId = parseInt(currentUser.role_id, 10); // Convert to number using parseInt
        return invoicesRoles.includes(roleId);
      }
    useEffect(() => {
        if (checkUserRoleInvoices(currentUser)) {
            handleSetActivePage(4);
        } else {
            handleSetActivePage(3);
        }
    }, []);

    const current_user_role = currentUser.role_id;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sidebarNavigation = [
        {
            id: 0,
            name: "GTMS",
            href: "#",
            icon: HomeIcon,
            current: false,
            role: [""],
        },
        {
            id: 3,
            name: "GTRS",
            href: "#",
            icon: DocumentMagnifyingGlassIcon,
            current: false,
            options: [
                {
                    id: 0,
                    name: "Dashboard",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
                {
                    id: 1,
                    name: "Consignments",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
                {
                    id: 2,
                    name: "Kpi Report",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
                {
                    id: 4,
                    name: "Performance report",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
                {
                    id: 5,
                    name: "Failed Consignments",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
                {
                    id: 6,
                    name: "No Delivery info",
                    current: false,
                    role: ["1", "4"],
                },
                {
                    id: 7,
                    name: "Additional Charges",
                    current: false,
                    role: ["1", "4"],
                },
                {
                    id: 8,
                    name: "Driver Login",
                    current: false,
                    role: ["1", "4"],
                },
                {
                    id: 9,
                    name: "RDD",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
                {
                    id: 10,
                    name: "Safety",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
                {
                    id: 12,
                    name: "Missing POD",
                    current: false,
                    role: ["1", "2", "3", "4", "5"],
                },
            ],
            func: setActiveIndexGTRS,
            role: ["1", "2", "3", "4", "5"],
        },
        {
            id: 4,
            name: "Invoices",
            href: "#",
            icon: DocumentChartBarIcon,
            current: gtrsCurrent,
            options: [
                {
                    id: 0,
                    name: "Dashboard",
                    current: false,
                    role: ["1"],
                },
                {
                    id: 1,
                    name: "Invoices",
                    current: false,
                    role: ["1", "6","7","8","9","10"],
                },
                {
                    id: 2,
                    name: "Purchase order",
                    current: false,
                    role: ["1",  "6","7","8","9","10"],
                },
                {
                    id: 3,
                    name: "Suppliers",
                    current: false,
                    role: ["1",  "6","7","8","9","10"],
                },
                {
                    id: 4,
                    name: "Services",
                    current: false,
                    role: ["1",  "6","7","8","9","10"],
                },
                {
                    id: 5,
                    name: "Companies",
                    current: false,
                    role: ["1",  "6","7","8","9","10"],
                },
                {
                    id: 11,
                    name: "Categories",
                    current: false,
                    role: ["1", "6","7","8","9","10"],
                },
                {
                    id: 12,
                    name: "Close reasons",
                    current: false,
                    role: ["1", "6","7","8","9","10"],
                },
            ],
            role: ["1", "6","7","8","9","10"],
        },
        {
            id: 5,
            name: "Admin",
            href: "/nova",
            icon: PencilSquareIcon,
            current: false,

            role: ["1"],
        },
        {
            id: 6,
            name: "Jaix",
            href: "https://jaixwebapps.gtls.com.au/Portal/Account/Login.aspx",
            img: JAIX,
            current: false,
            role: ["1", "2", "3", "4", "5", "6","7","8","9","10"],
        },

        // { name: 'Settings', href: '#', icon: CogIcon, current: false },
    ];
    const [sidebarElements, setSidebarElements] = useState(sidebarNavigation);
    const handleSetActivePage = (id) => {
        setactivePage(id);
        setSidebarElements((prevData) =>
            prevData.map((item) => ({
                ...item,
                current: item.id === id ? true : false,
            }))
        );
    };
    const handleClick = (index) => {
        if (index == 5 || index == 6) {
            setMobileMenuOpen(false);
        } else {
            setactivePage(index);
            setMobileMenuOpen(false);
            const updatedElements = sidebarNavigation.map((element) => {
                if (element.id === index) {
                    return { ...element, current: true };
                } else {
                    return { ...element, current: false };
                }
            });
            setSidebarElements(updatedElements);
        }
    };
    const handleClickSupport = (index) => {};

    const handleClickSide = (index, tabind) => {
        setactivePage(index);
        if (index == 3) {
            setActiveIndexGTRS(tabind);
        } else if (index == 4) {
            setActiveIndexInv(tabind);
        }

        setMobileMenuOpen(false);
        const updatedElements = sidebarNavigation.map((element) => {
            if (element.id === index) {
                return { ...element, current: true };
            } else {
                return { ...element, current: false };
            }
        });
        setSidebarElements(updatedElements);
    };
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const handleLinkClick = (event) => {
        event.preventDefault();
        // Call the `visit` method to navigate to the new page
        Inertia.visit(event.target.href);
    };

    const handleEditClick = () => {
        const isModalCurrentlyOpen = !isModalOpen;
        document.body.style.overflow = isModalCurrentlyOpen ? "hidden" : "auto";
        setIsModalOpen(isModalCurrentlyOpen);
        setMobileMenuOpen(false);
    };

    return (
        <div>
            <div className="hidden md:flex md:flex-shrink-0 h-full fixed top-0 left-0 z-50 w-auto h-screen">
                <div className="flex w-20 flex-col">
                    <div className="flex min-h-0 flex-1 flex-col overflow-y-auto bg-gray-800">
                        <div className="flex-1">
                            <div className="flex items-center justify-center bg-gray-800 py-4">
                                <a href="/">
                                    <img src={tiger} alt="Image" />
                                </a>
                            </div>
                            <nav
                                aria-label="Sidebar"
                                className="flex flex-col items-center space-y-3 pt-6 h-96"
                            >
                                {sidebarElements
                                    .filter((item) =>
                                        item.role.includes(current_user_role)
                                    )
                                    .map((item) => (
                                        //{sidebarElements.map((item) => (

                                        <a
                                            href={item.href}
                                            key={item.id}
                                            target={
                                                item.id === 5 || item.id === 6
                                                    ? "_blank"
                                                    : undefined
                                            }
                                        >
                                            {" "}
                                            <button
                                                key={item.name}
                                                // href={item.href}
                                                onClick={() =>
                                                    handleClick(item.id)
                                                }
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-700 text-white"
                                                        : "text-gray-400 hover:bg-gray-900 hover:text-white",
                                                    "group w-auto p-3 rounded-md flex flex-col items-center text-xs font-medium"
                                                )}
                                                // aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.icon ? (
                                                    <item.icon
                                                        className={classNames(
                                                            item.current
                                                                ? "text-yellow-400"
                                                                : "text-gray-400 group-hover:text-white",
                                                            "h-6 w-6"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                ) : (
                                                    <img
                                                        src={item.img}
                                                        className={classNames(
                                                            item.current
                                                                ? "text-yellow-400"
                                                                : "text-gray-400 group-hover:text-white",
                                                            "h-6 w-8"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                )}
                                                <span className="mt-2">
                                                    {item.name}
                                                </span>
                                            </button>
                                        </a>
                                        // </Link>
                                    ))}
                            </nav>
                        </div>
                        <div className="flex flex-col flex-shrink-0 pb-5">
                            <a href="#" className="flex justify-center">
                                {" "}
                                <button
                                    onClick={() => handleEditClick()}
                                    className={classNames(
                                        "text-gray-400 hover:bg-gray-900 hover:text-white",
                                        "group w-auto p-3 rounded-md flex flex-col items-center text-xs font-medium"
                                    )}
                                    // aria-current={item.current ? 'page' : undefined}
                                >
                                    <QuestionMarkCircleIcon
                                        className={classNames(
                                            "text-gray-400 group-hover:text-white",
                                            "h-6 w-6"
                                        )}
                                        aria-hidden="true"
                                    />

                                    <span className="mt-2">Support</span>
                                </button>
                            </a>

                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                                className="flex flex-col hover:bg-gray-900 hover:text-white"
                            >
                                <ArrowRightOnRectangleIcon className="w-7 ml-2 text-gray-400" />
                                <span className="text-xs text-gray-400">
                                    LOGOUT
                                </span>
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </div>
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-20 lg:hidden"
                    onClose={setMobileMenuOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-1 right-0 -mr-14 p-1">
                                        <button
                                            type="button"
                                            className="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none "
                                            onClick={() =>
                                                setMobileMenuOpen(false)
                                            }
                                        >
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <img
                                        className="h-8 w-auto"
                                        src={tiger}
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto px-2">
                                    <nav className="flex h-full flex-col">
                                        <div className="space-y-1">
                                            {sidebarElements
                                                .filter((item) =>
                                                    item.role.includes(
                                                        current_user_role
                                                    )
                                                )
                                                .map((item) => (
                                                    // {sidebarElements.map((item) => (
                                                    <Accordion
                                                        key={item.id}
                                                        transition={{
                                                            duration: "300ms",
                                                            timingFunction:
                                                                "cubic-bezier(0, 0, 0.2, 1)",
                                                        }}
                                                    >
                                                        {item.options ? (
                                                            <AccordionItem>
                                                                {({ open }) => (
                                                                    <>
                                                                        <AccordionHeader
                                                                            // className=" "
                                                                            className={classNames(
                                                                                item.current
                                                                                    ? "bg-gray-700 text-white"
                                                                                    : "text-gray-400 hover:bg-gray-900 hover:text-white",
                                                                                "group py-2 px-3 rounded-md flex gap-x-2 items-center text-sm font-medium w-full flex justify- items-center text-gray-600  p-4"
                                                                            )}
                                                                        >
                                                                            {item.icon ? (
                                                                                <item.icon
                                                                                    className={classNames(
                                                                                        item.current
                                                                                            ? "text-yellow-400"
                                                                                            : "text-gray-400 group-hover:text-white",
                                                                                        "h-6 w-6"
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            ) : (
                                                                                <img
                                                                                    src={
                                                                                        item.img
                                                                                    }
                                                                                    className={classNames(
                                                                                        item.current
                                                                                            ? "text-yellow-400"
                                                                                            : "text-gray-400 group-hover:text-white",
                                                                                        "h-6 w-6"
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            )}
                                                                            <span>
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </span>
                                                                            <ChevronDownIcon className="h-3" />
                                                                            {/* {item.options ? 
                                                                    <svg
                                                                        class={`w-6 h-6 ${
                                                                            !open
                                                                                ? ""
                                                                                : "rotate-90"
                                                                        }`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                    :
                                                                     ""
                                                                    } */}
                                                                        </AccordionHeader>
                                                                        {/* {sidebarElements.filter(item => item.role.includes(current_user_role)).map((item) => ( */}

                                                                        {item.options ? (
                                                                            <AccordionBody className="pl-8 flex flex-col">
                                                                                {item.options
                                                                                    .filter(
                                                                                        (
                                                                                            item
                                                                                        ) =>
                                                                                            item.role.includes(
                                                                                                current_user_role
                                                                                            )
                                                                                    )
                                                                                    .map(
                                                                                        (
                                                                                            option
                                                                                        ) => (
                                                                                            <button
                                                                                                onClick={() =>
                                                                                                    handleClickSide(
                                                                                                        item.id,
                                                                                                        option.id
                                                                                                    )
                                                                                                }
                                                                                                className="p-5 font-light text-left text-white"
                                                                                            >
                                                                                                {
                                                                                                    option.name
                                                                                                }
                                                                                            </button>
                                                                                        )
                                                                                    )}
                                                                            </AccordionBody>
                                                                        ) : (
                                                                            ""
                                                                        )}
                                                                    </>
                                                                )}
                                                            </AccordionItem>
                                                        ) : (
                                                            <a
                                                                href={item.href}
                                                                onClick={() =>
                                                                    handleClick(
                                                                        item.id
                                                                    )
                                                                }
                                                            >
                                                                <AccordionItem>
                                                                    {({
                                                                        open,
                                                                    }) => (
                                                                        <>
                                                                            <AccordionHeader
                                                                                // className=" "
                                                                                className={classNames(
                                                                                    item.current
                                                                                        ? "bg-gray-700 text-white"
                                                                                        : "text-gray-400 hover:bg-gray-900 hover:text-white",
                                                                                    "group py-2 px-3 rounded-md flex gap-x-2 items-center text-sm font-medium w-full flex justify- items-center text-gray-600  p-4"
                                                                                )}
                                                                            >
                                                                                {item.icon ? (
                                                                                    <item.icon
                                                                                        className={classNames(
                                                                                            item.current
                                                                                                ? "text-yellow-400"
                                                                                                : "text-gray-400 group-hover:text-white",
                                                                                            "h-6 w-6"
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                ) : (
                                                                                    <img
                                                                                        src={
                                                                                            item.img
                                                                                        }
                                                                                        className={classNames(
                                                                                            item.current
                                                                                                ? "text-yellow-400"
                                                                                                : "text-gray-400 group-hover:text-white",
                                                                                            "h-6 w-6"
                                                                                        )}
                                                                                        aria-hidden="true"
                                                                                    />
                                                                                )}
                                                                                <span>
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </span>
                                                                                {/* {item.options ? 
                                                                    <svg
                                                                        class={`w-6 h-6 ${
                                                                            !open
                                                                                ? ""
                                                                                : "rotate-90"
                                                                        }`}
                                                                        fill="currentColor"
                                                                        viewBox="0 0 20 20"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <path
                                                                            fillRule="evenodd"
                                                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                            clipRule="evenodd"
                                                                        />
                                                                    </svg>
                                                                    :
                                                                     ""
                                                                    } */}
                                                                            </AccordionHeader>
                                                                            {item.options ? (
                                                                                <AccordionBody className="pl-8 flex flex-col">
                                                                                    {item.options.map(
                                                                                        (
                                                                                            option
                                                                                        ) => (
                                                                                            <button
                                                                                                onClick={() =>
                                                                                                    handleClickSide(
                                                                                                        item.id,
                                                                                                        option.id
                                                                                                    )
                                                                                                }
                                                                                                className="p-5 font-light text-left text-white"
                                                                                            >
                                                                                                {
                                                                                                    option.name
                                                                                                }
                                                                                            </button>
                                                                                        )
                                                                                    )}
                                                                                </AccordionBody>
                                                                            ) : (
                                                                                ""
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </AccordionItem>
                                                            </a>
                                                        )}
                                                    </Accordion>
                                                    // </Link>
                                                ))}
                                        </div>
                                    </nav>
                                </div>
                                {/* <ResponsiveNavLink
                                                href={route("profile.edit")}
                                                className="hover:bg-gray-900 hover:text-white "
                                            >
                                                <img
                                                    className=" block h-8 w-8 rounded-full"
                                                    src={user.imageUrl}
                                                    alt=""
                                                />
                                            </ResponsiveNavLink> */}

                                <a href="#" className="flex ">
                                    {" "}
                                    <button
                                        onClick={() => handleEditClick()}
                                        className={classNames(
                                            "text-gray-400 hover:bg-gray-900 hover:text-white",
                                            "group w-auto p-3 rounded-md flex flex-col items-center text-xs font-medium"
                                        )}
                                        // aria-current={item.current ? 'page' : undefined}
                                    >
                                        <QuestionMarkCircleIcon
                                            className={classNames(
                                                "text-gray-400 group-hover:text-white",
                                                "h-6 w-6"
                                            )}
                                            aria-hidden="true"
                                        />

                                        <span className="mt-2">Support</span>
                                    </button>
                                </a>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                    className="flex flex-col hover:bg-gray-900 hover:text-white w-8 h-14"
                                >
                                    <ArrowRightOnRectangleIcon className="w-7 ml-2 text-gray-400" />
                                    <span className="text-xs text-gray-400">
                                        LOGOUT
                                    </span>
                                </ResponsiveNavLink>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <SupportModal isOpen={isModalOpen} handleClose={handleEditClick} />
        </div>
    );
}
