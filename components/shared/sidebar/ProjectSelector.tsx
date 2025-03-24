import React from "react";

type Props = {
  setProjectDropdownOpen: (open: boolean) => void;
  projectDropdownOpen: boolean;
  selectedProject: string;
  setSelectedProject: (project: string) => void;
};

const ProjectSelector = ({
  setProjectDropdownOpen,
  projectDropdownOpen,
  selectedProject,
  setSelectedProject,
}: Props) => {
  return (
    <div className="p-4 ">
      <p className="text-sm text-gray-500 mb-1">Choose your Account</p>
      <div className="relative">
        <button
          onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
          className="flex items-center justify-between w-full bg-white border border-gray-100 rounded-[8px] p-2 cursor-pointer hover:bg-gray-50"
        >
          <span className="text-md">{selectedProject}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 text-gray-500 transition-transform ${
              projectDropdownOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {projectDropdownOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-100 rounded-md shadow-lg">
            <ul className="py-1">
              {["Project Alpha", "Project Beta", "Project Gamma"].map(
                (project, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setProjectDropdownOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {project}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSelector;
