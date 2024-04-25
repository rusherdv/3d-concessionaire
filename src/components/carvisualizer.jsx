import { useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, OrbitControls } from "@react-three/drei";

function Model(props) {
  const [currentCar, setCurrentCar] = useState(props.car);
  const { scene, materials } = useGLTF(currentCar);

  if (currentCar === "/supra.glb") {
    useEffect(() => {
      materials[
        "Toyota_Supra_2020_with_Interior_noTTo3Ds_carpaint.001"
      ].color.set(props.color);
      materials[
        "Toyota_Supra_2020_with_Interior_noTTo3Ds_leatherRed.001"
      ].color.set(props.color);
    }, [materials, props.color]);

    useEffect(() => {
      materials["Toyota_Supra_2020_with_Interior_noTTo3Ds_rimB.001"].color.set(
        props.wheelColor
      );
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  } else if (currentCar === "/svj.glb") {
    useEffect(() => {
      materials["CARROSSERIE"].color.set(props.color);
    }, [materials, props.color]);

    useEffect(() => {
      materials["Material.012"].color.set(props.wheelColor);
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  } else if (currentCar === "/porsche911turbos.glb") {
    useEffect(() => {
      materials["paint"].color.set(props.color);
    }, [materials, props.color]);

    useEffect(() => {
      materials["Material.001"].color.set(props.wheelColor);
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  } else if (currentCar === "/bmw.glb") {
    useEffect(() => {
      materials["body"].color.set(props.color);
    }, [materials, props.color]);

    useEffect(() => {
      materials["etriers"].color.set(props.wheelColor);
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  } else if (currentCar === "/a5.glb") {
    useEffect(() => {
      materials["2021_Audi_A5_Sportback_S-Line_Ibis_White"].color.set(
        props.color
      );
    }, [materials, props.color]);

    useEffect(() => {
      materials["2021_Audi_A5_Sportback_S-Line_Rims1"].color.set(
        props.wheelColor
      );
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  } else if (currentCar === "/mustang.glb") {
    useEffect(() => {
      materials["carpaint"].color.set(props.color);
      materials["leather"].color.set(props.color);
    }, [materials, props.color]);

    useEffect(() => {
      materials["brake"].color.set(props.wheelColor);
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  } else if (currentCar === "/koenigsegg.glb") {
    useEffect(() => {
      materials["material_17"].color.set(props.color);
    }, [materials, props.color]);

    useEffect(() => {
      materials["Material.015"].color.set(props.wheelColor);
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  } else if (currentCar === "/challenger.glb") {
    useEffect(() => {
      materials["Carosserie"].color.set(props.color);
    }, [materials, props.color]);

    useEffect(() => {
      materials["Material.009"].color.set(props.wheelColor);
    }, [materials, props.wheelColor]);

    return <primitive object={scene} {...props} />;
  }

  return <primitive object={scene} {...props} />;
}

export function CarVisualizer(props) {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ fov: 60 }} className="absolute">
        <color attach="background" args={["#101010"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls />
        <Stage environment={"sunset"}>
          <Model
            car={props.car.object}
            scale={1}
            color={props.color}
            wheelColor={props.wheelColor}
            rotation={[0, 6, 0]}
          />
        </Stage>
      </Canvas>
    </>
  );
}
