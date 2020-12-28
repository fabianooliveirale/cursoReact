import React from "react";
import "./index.css";

import First from "./components/basic/First";
import Title from "./components/basic/Second";
import TestGradeResult from "./components/basic/TestGradeResult";
import ParamComponent from "./components/basic/ParamComponent";
import ParamComponentSecond from "./components/basic/ParamComponentSecond";
import ReturnRandomValue from "./components/basic/ReturnRandomValue";
import Family from "./components/basic/Family";
import FamilyArray from "./components/basic/FamilyArray";

import Card from "./components/layout/Card";
import FamilyMember from "./components/basic/FamilyMember";
import FamilyCloneElement from "./components/basic/FamilyCloneElement";
import FamilyMapElements from "./components/basic/FamilyMapElements";
import DirectFather from "./components/example/directComunication/DirectFather";
import IndirectFather from "./components/example/indirectComunication/IndirectFather";

import Counter from "./components/advanced/Counter";

import Input from "./components/formulario/Input";

import StudentArray from "./components/basic/StudentArray";

import Grid from "./components/layout/Grid";

import students from "./data/students";
import products from "./data/products";

export default () => (
  <div>
    <div style={styles.titleStyle}>Fundamentos do React</div>
    <div>
      <AllCards />
    </div>
  </div>
);

const AllCards = () => {
  const familyArray = [
    { name: "Gluit", lastName: "Broca" },
    { name: "Glomini", lastName: "Broca" },
    { name: "Preda", lastName: "Broca" },
    { name: "Foguinho", lastName: "Broca" },
  ];

  return (
    <div style={styles.allCards}>
      <Card title="Count" backgroundColor="#323232">
        <Counter />
      </Card>

      <Card title="Indirect Comunication" backgroundColor="#050">
        <IndirectFather />
      </Card>

      <Card title="Indirect Comunication" backgroundColor="#050">
        <Input />
      </Card>

      <Card title="Direct Comunication" backgroundColor="#050">
        <DirectFather name="Predo" childName="Filhote" />
      </Card>

      <Card title="Product Grid" backgroundColor="#050">
        <Grid products={products} />
      </Card>

      <Card title="StudentArray" backgroundColor="#000">
        <StudentArray students={students} />
      </Card>

      <Card title="Family" backgroundColor="#008">
        <FamilyArray members={familyArray} />
      </Card>

      <Card title="Family CHILDREN Map Elements" backgroundColor="#008">
        <FamilyMapElements lastName="Blastonaldos">
          {familyArray.map((element, index) => {
            return <FamilyMember key={index} {...element} />;
          })}
        </FamilyMapElements>
      </Card>

      <Card title="Family CHILDREN Map Elements" backgroundColor="#008">
        <FamilyMapElements lastName="Blotaa">
          <FamilyMember name="Camiro" />
          <FamilyMember name="Facto" />
          <FamilyMember name="Bravbo" />
          <FamilyMember name="Pelinho" />
        </FamilyMapElements>
      </Card>

      <Card title="Family Clone Unique" backgroundColor="#008">
        <FamilyCloneElement lastName="Verginia">
          <FamilyMember name="Cabrito" />
        </FamilyCloneElement>
      </Card>

      <Card title="Family" backgroundColor="#008">
        <Family lastName="Conrrados" />
      </Card>

      <Card title="Random Value" backgroundColor="#f2f">
        <ReturnRandomValue firstValue={30} secondValue={20} />
      </Card>

      <Card title="Random Value">
        <ReturnRandomValue firstValue={20} secondValue={30} />
      </Card>

      <Card title="Random Value">
        <ReturnRandomValue firstValue={40} secondValue={30} />
      </Card>

      <Card title="Random Value">
        <ReturnRandomValue firstValue={70} secondValue={30} />
      </Card>

      <Card title="TestGradeResult João">
        <TestGradeResult name="João" testGrade={8.5} />
      </Card>

      <Card title="TestGradeResult Maria">
        <TestGradeResult name="Maria" testGrade={6} />
      </Card>

      <Card title="Title">
        <Title />
      </Card>

      <Card title="First">
        <First />
      </Card>

      <Card title="ParamComponent">
        <ParamComponent
          title="Titulo por Parametro"
          text="Text por parametro"
        />
      </Card>

      <Card title="ParamComponentSecond">
        <ParamComponentSecond
          title="Titulo por Parametro"
          text="Text por parametro"
        />
      </Card>
    </div>
  );
};

const styles = {
  allCards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  titleStyle: {
    color: "#7f7fff",
    justifyContent: "center",
    padding: 3,
    fontSize: 36,
    fontWeight: "bold",
    display: "flex",
  },
};
