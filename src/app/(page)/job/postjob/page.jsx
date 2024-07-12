"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    jobType: "Full-time",
    description: "",
    responsibilities: "",
    requirements: "",
    minSalary: "",
    maxSalary: "",
    experienceLevel: "Junior",
    skills: "",
    industry: "",
    benefits: "",
    contactEmail: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          responsibilities: form.responsibilities.split(","),
          requirements: form.requirements.split(","),
          skills: form.skills.split(","),
          benefits: form.benefits.split(","),
          salaryRange: {
            min: form.minSalary,
            max: form.maxSalary,
          },
        }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        console.error("Failed to add job");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-4 space-y-4 bg-white shadow-md rounded-lg"
    >
      <h1 className="text-2xl font-bold mb-4">Add Job</h1>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Job Title"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company Name"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <select
        name="jobType"
        value={form.jobType}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      >
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Contract">Contract</option>
        <option value="Temporary">Temporary</option>
        <option value="Internship">Internship</option>
      </select>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Job Description"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="responsibilities"
        value={form.responsibilities}
        onChange={handleChange}
        placeholder="Responsibilities (comma separated)"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="requirements"
        value={form.requirements}
        onChange={handleChange}
        placeholder="Requirements (comma separated)"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="minSalary"
        value={form.minSalary}
        onChange={handleChange}
        placeholder="Min Salary"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="number"
        name="maxSalary"
        value={form.maxSalary}
        onChange={handleChange}
        placeholder="Max Salary"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <select
        name="experienceLevel"
        value={form.experienceLevel}
        onChange={handleChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      >
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </select>
      <input
        type="text"
        name="skills"
        value={form.skills}
        onChange={handleChange}
        placeholder="Skills (comma separated)"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="industry"
        value={form.industry}
        onChange={handleChange}
        placeholder="Industry"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="benefits"
        value={form.benefits}
        onChange={handleChange}
        placeholder="Benefits (comma separated)"
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        name="contactEmail"
        value={form.contactEmail}
        onChange={handleChange}
        placeholder="Contact Email"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md"
      />
      <button
        type="submit"
        className="w-full px-3 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Add Job
      </button>
    </form>
  );
};

export default AddJob;
