const inputsArr1 = ['分子比', '温度', '铝水平(mm)', '电解质水平(mm)'];
const inputsArr2 = ['出铝指示量', '计划出铝量', '实际出铝量', 'Fe含量'];
const inputsArr3 = ['Si含量', '氧化铝浓度', '氟化钙含量', '氟化钾含量'];
const inputsArr4 = ['氟化锂含量', '侧壁温度', '原铝质量', '氟化镁量'];
const inputsArr5 = ['炉底压降', '钙含量', '镁含量', '氧化铝钠含量'];
const inputsArr6 = ['氧化铝灼碱', '氧化铝粒度', '炉底板温度', '炉帮厚度'];
const inputsArr7 = ['出铝总数量', '保温材料厚度', '冰晶石加入量', '极距'];
const inputsArr8 = ['极块号', '出晶温度', '过热度'];

const arr = [
	...inputsArr1,
	...inputsArr2,
	...inputsArr3,
	...inputsArr4,
	...inputsArr5,
	...inputsArr6,
	...inputsArr7,
	...inputsArr8,
];

const buildListItems = (dataSource) => {
	const result = arr.map((item) => {
		return {
			label: item,
			type: 'input',
			// defaultValue: dataSource.reservoirName,
		};
	});

	return result;
};

buildListItems.data = arr;

export default buildListItems;
