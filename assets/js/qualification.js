const qualifications = [
    {
        title: "Programming Journey",
        year: "2026",
        description: "Complete web development course which included HTML to JavaScript, React, Node/Expressjs, MongoDB etc.",
        institute: {
            name: "",
            shortName: "",
            duration: "Jun 2022 - December 2024"
        }
    },
    {
        title: "BTech(CSE) in Pandit Deendayal Energy University",
        year: "2022 2026",
        description: "Achieved four years bechelor degree from a reputed university. It was a great really a experience of life.",
        institute: {
            name: "Pandit Deendayal Energy University",
            shortName: "PDEU",
            duration: "Jun 2022 - May 2026"
        }
    },
    {
        title: "SSC & HSC in Shree Swaminarayan Gurukul, Junagadh",
        year: "2020 2022",
        description: "Achieved two years higher secondary degree from Science major from a reputed college.",
        institute: {
            name: "Gurukul Junagadh",
            shortName: "SGRS",
            duration: "June 2017 - April 2022"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href="https://web.programming-hero.com/" target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

