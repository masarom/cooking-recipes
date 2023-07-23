import '../../styles/layout/NewRecipePreview.scss';

const NewRecipeSteps = ({ eachStep, steps, updateSteps }) => {
  const handleClickDelete = (ev) => {
    ev.preventDefault();
    console.log(ev.currentTarget.parentNode.id);
    const findStep = steps.find((step) => step === eachStep);
    const findStepIndex = steps.findIndex((step) => step === findStep);
    updateSteps(findStepIndex);
  };
  return (
    <div className='item'>
      <button className='recipe__preview--elaboration-btn' onClick={handleClickDelete}>
        x
      </button>
      {eachStep}
    </div>
  );
};

export default NewRecipeSteps;
