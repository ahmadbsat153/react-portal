import React, { Fragment, useState } from "react";
import {
    ChartPieIcon,
    TruckIcon,
    ClipboardDocumentCheckIcon,
    PresentationChartLineIcon,
    ExclamationTriangleIcon,
    NoSymbolIcon,
    CurrencyDollarIcon,
    UserIcon,
    CircleStackIcon,
    ClockIcon,
    ChevronDownIcon,
    ShieldCheckIcon,
    CameraIcon,
} from "@heroicons/react/24/solid";
import "../../../../css/scroll.css";
import { Icon } from "@mui/material";
import { useEffect } from "react";

const navigation = [
    {
        id: 0,
        name: "Dashboard",
        href: "#",
        icon: ChartPieIcon,
        current: true,
        role: ["1", "2", "3", "4", "5"],
    },
    {
        id: 1,
        name: "Consignments",
        href: "#",
        icon: TruckIcon,
        current: false,
        role: ["1", "2", "3", "4", "5"],
    },
    {
        id: 2,
        name: "KPI Report ",
        href: "#",
        icon: ClipboardDocumentCheckIcon,
        current: false,
        role: ["1", "2", "3", "4", "5"],
    },
    {
        id: 4,
        name: "Performance Report",
        href: "#",
        icon: PresentationChartLineIcon,
        current: false,
        role: ["1", "2", "3", "4", "5"],
    },
    {
        id: 5,
        name: "Failed Consignments",
        href: "#",
        icon: ExclamationTriangleIcon,
        current: false,
        role: ["1", "2", "3", "4", "5"],
    },

    {
        id: 9,
        name: "RDD",
        href: "#",
        icon: ClockIcon,
        current: false,
        role: ["1", "2", "3", "4", "5"],
    },
    {
        id: 11,
        name: "Missing POD",
        href: "#",
        icon: CameraIcon,
        current: false,
        role: ["1", "2", "3", "4", "5"],
    },
    {
        id: 10,
        name: "Safety",
        href: "#",
        icon: ShieldCheckIcon,
        current: false,
        role: ["1", "2", "3", "4", "5"],
    },
    {
        id: 6,
        name: "No Delivery info.",
        href: "#",
        icon: NoSymbolIcon,
        current: false,
        role: ["1", "3", "4", "5"],
    },
    {
        id: 7,
        name: "Additional Charges",
        href: "#",
        icon: CurrencyDollarIcon,
        current: false,
        role: ["1", "3", "4", "5"],
    },
    {
        id: 8,
        name: "Driver Login",
        href: "#",
        icon: UserIcon,
        current: false,
        role: ["1", "3", "4", "5"],
    },

];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function ChartsSidebar({
    sessionData,
    activeIndexGTRS,
    setActiveIndexGTRS,
    currentUser,
    onData,
}) {

    const [customerOptions, setCustomerOptions] = useState([]);
    const [showList, setShowList] = useState(false);
    // const showSelect = true;
    const showSelect = customerOptions.length > 0;

    const handleDivClick = () => {
        setShowList(!showList);
    };
    const [optionSelected, setoptionSelected] = useState([]);

    const handleCheckboxClick = (option1, event) => {
        const value = customerOptions.map((option) =>
            option.value === option1.value
                ? { ...option, checked: !option.checked }
                : option
        );
        setCustomerOptions(value);
        handleSelectedCValue(event);
    };
    const handleSelectedCValue = (event) => {
        const optionValue = event.target.value;
        if (event.target.checked && !optionSelected.includes(optionValue)) {
            setoptionSelected([...optionSelected, optionValue]);
        } else {
            setoptionSelected(
                optionSelected.filter((value) => value !== optionValue)
            );
        }
    };
    function sortObjectsByParentId(objects) {
        const sortedObjects = [...objects].sort((a, b) => a.parent_id - b.parent_id);
        return sortedObjects;
      }
      
    useEffect(() => {
        handleClick(activeIndexGTRS)
        axios.get(`/childrenlist/${currentUser.id}`).then((res) => {
            const dataWithCheckedField = res.data.data.map((item) => ({
                ...item,
                checked: false,
            }));
            setCustomerOptions(sortObjectsByParentId(dataWithCheckedField));
        });
    }, []);
    useEffect(() => {
        onData(optionSelected);
    }, [optionSelected]);
    const current_user_role = currentUser.role_id;
    const [sidebarElements, setSidebarElements] = useState(navigation);

    const handleClick = (index) => {
        setActiveIndexGTRS(index);
        const updatedElements = sidebarElements.map((element) => {
            if (element.id === index) {
                return { ...element, current: true };
            } else {
                return { ...element, current: false };
            }
        });
        setSidebarElements(updatedElements);
    };
    return (
        <div className="h-full xl:fixed xl:w-64 md:h-full xl:fixed bg-gray-200 w-full ">
            {/* Static sidebar for desktop */}
            <div className=" h-[90%] md:inset-y-0 flex md:w-full md:flex-row ">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className=" h-full w-full overflow-y-scroll containerscroll">
                    <div className="flex flex-col">
                        <div className="flex flex-shrink-0  p-4 ">
                            <div
                                className="group block w-full flex-shrink-0"
                            >
                                <div className="flex items-center">
                                    <div>
                                        {currentUser.icon ? (
                                            <img
                                                className="inline-block h-14 w-14"
                                                src={`/app/icons/blank-profile.jpg`}
                                                alt=""
                                            />
                                        ) : (
                                            <img
                                                className="inline-block h-14 w-14 object-contain"
                                                src={`/app/icons/${currentUser.icon}`}
                                                alt=""
                                            />
                                        )}
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-800">
                                            {currentUser.name}
                                        </p>
                                        <p className=" text-[0.7rem] text-gray-500 ">
                                            {currentUser.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 flex-1 xl:flex-col space-y-1 px-2 w-full md:flex-row md:flex md:mt-0 hover:cursor-pointer containerscroll">
                            {showSelect && (
                                <div className="group flex flex-col items-center px-2 py-2 text-gray-700 text-sm font-medium rounded-md w-full hover:bg-gray-100">
                                    <div
                                        onClick={handleDivClick}
                                        className="flex flex-row w-full justify-between items-center"
                                    >
                                        <div className="flex flex-row items-center">
                                            <CircleStackIcon className="mr-3 flex-shrink-0 h-6 w-6" />
                                            <div className="pt-1">Accounts</div>
                                        </div>
                                        <div className="flex-shrink-0 ">
                                            <ChevronDownIcon className="h-4 w-4" />
                                        </div>
                                    </div>
                                    <div className="text-left w-full">
                                        {showList && (
                                            <div className="text-left max-h-64 overflow-y-scroll mt-3 pt-1 pl-1 containerscroll">
                                                {customerOptions.map(
                                                    (option) => (
                                                        <div
                                                            className="flex items-center"
                                                            key={option.value}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                id={
                                                                    option.value
                                                                }
                                                                value={
                                                                    option.value
                                                                }
                                                                checked={
                                                                    option.checked
                                                                }
                                                                onChange={(e) =>
                                                                    handleCheckboxClick(
                                                                        option,
                                                                        e
                                                                    )
                                                                }
                                                            />
                                                            <label
                                                                htmlFor={
                                                                    option.value
                                                                }
                                                                className="ml-2"
                                                            >
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className=" pt-2 pb-4 w-full">
                        <nav className="mt-5 flex-1 hidden xl:flex-col space-y-1 px-2 w-full md:flex-row md:flex md:mt-0 ">
                            {sidebarElements
                                .filter((item) =>
                                    item.role.includes(current_user_role)
                                )
                                .map((item) => (
                                    // {sidebarElements.map((item) => (
                                    <a
                                        onClick={() => handleClick(item.id)}
                                        key={item.name}
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-300 text-gray-900"
                                                : "text-gray-700 hover:bg-gray-500 hover:text-white",
                                            "group flex flex-row items-center px-2 py-2 text-sm font-medium rounded-md lg:w-1/2 xl:w-full"
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current
                                                    ? "text-gray-800"
                                                    : "text-gray-700 group-hover:text-gray-300",
                                                "mr-3 flex-shrink-0 h-6 w-6"
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
