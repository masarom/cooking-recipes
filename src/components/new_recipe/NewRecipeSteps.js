const NewRecipeSteps = ({ eachStep, steps, updateSteps }) => {
  const handleClickDelete = (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget.parentNode.id);
    console.log(steps);
    const findStep = steps.find((step) => step === eachStep);
    console.log(findStep);
    const findStepIndex = steps.findIndex((step) => step === findStep);
    console.log(findStepIndex);
    updateSteps(findStepIndex);
  };
  return (
    <>
      <button onClick={handleClickDelete}>x</button>
      {eachStep}
    </>
  );
};

export default NewRecipeSteps;
