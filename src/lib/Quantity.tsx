interface QuantityProps {
    num?: number
    min?: number
    max?: number
    onInc?: (value: number) => void
    onDec?: (value: number) => void
  }

  export const Quantity = ({
    num = 1,
    min = 1,
    max = 10,
    onInc,
    onDec
  }: QuantityProps) => {


    function increment() {
        if (num < max) {
          onInc?.(num + 1)
        }
      }
      function decrement() {
        if (num > min) {
          onDec?.(num - 1)
        }
      }

return(
    <span>
        <div className="flex items-center">
            <div className="flex justify-center items-center mr-4 w-12">
                {num}
            </div>
            <div className="flex flex-col">
                <button  onClick={ increment}> <i className="fa-solid fa-caret-up"></i> </button>
                <button  onClick={ decrement}> <i className="fa-solid fa-caret-down"></i> </button>
            </div>
        </div>
    </span>
)
}