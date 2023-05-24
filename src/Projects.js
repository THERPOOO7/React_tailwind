import React from 'react'

function Projects() {
    return (
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Project 1</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-xl font-bold mb-2">Project 2</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Projects