import { camelize } from '../utils/stringAPI';
import { useRef } from 'react';

const ExerciseModal = ({ modal, setModal }) => {
  const overlayRef = useRef(null);
  const { name, bodyPart, equipment, gifUrl, target, instructions } = modal;

  console.log('modal rendered');
  return (
    <div className="fixed w-full h-screen top-0 left-0 flex justify-center items-center">
      <div className="w-auto bg-gray-100 rounded-lg shadow-xl p-8 flex flex-col gap-5 items-center justify-start">
        <h3 className="text-xl font-semibold text-red-500 text-center">{camelize(name)}</h3>
        <img src={gifUrl} alt={name} className="w-64 md:block hidden rounded-lg" />
        <div className="md:flex hidden flex-wrap gap-5 text-center">
          <p className="text-lg text-gray-700">
            <span className="font-bold">Body Part:</span> {camelize(bodyPart)}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Equipment:</span> {camelize(equipment)}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Targets:</span> {camelize(target)}
          </p>
        </div>
        <div className="w-full">
          <p className="text-2xl font-semibold text-center">Instructions</p>
          <ul className="text-lg text-gray-700 list-disc list-inside mt-2">
            {instructions.map((instruction, index) => (
              <li key={'list' + index}>
                {index + 1}. {instruction}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="fixed w-full h-screen top-0 left-0 backdrop-blur-lg z-[-1]"
        ref={overlayRef}
        onClick={() => {
          overlayRef.current.style.display = 'none';
          setModal(false);
          document.body.style.overflow = 'auto';
        }}
      ></div>
    </div>
  );
};

export default ExerciseModal;
