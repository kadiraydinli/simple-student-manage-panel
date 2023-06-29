"use client";

import React, { useState } from "react";

import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";

const Students = () => {
	const [searchValue, setSearchValue] = useState<string>("");

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const onAddStudent = () => {};

	return (
		<div className="w-full h-full bg-[--background]">
			<Header />
			<PageHeader
				title="Students List"
				buttonProps={{ children: "ADD NEW STUDENT", onClick: onAddStudent }}
				searchInputProps={{ value: searchValue, onChange: onChangeSearch }}
			/>
		</div>
	);
};

export default Students;
