const NewRecipeSteps = ({ eachStep, steps, updateSteps }) => {
  const handleClickDelete = (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget.parentNode.id);
    const findStep = steps.find((step) => step === eachStep);
    const findStepIndex = steps.findIndex((step) => step === findStep);
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
