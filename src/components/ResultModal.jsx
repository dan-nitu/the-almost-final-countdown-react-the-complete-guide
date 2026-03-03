import { forwardRef, useImperativeHandle, useRef } from 'react';
// ^ forwardRef for older versions of React, you would import forwardRef from 'react' like this
// ^ useImperativeHandle allows you to customize the instance value that is exposed to parent components when using ref. In this case, it allows the parent component to call the open method on the ResultModal component.

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref,
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className='result-modal'>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>.
      </p>

      <form method='dialog'>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
