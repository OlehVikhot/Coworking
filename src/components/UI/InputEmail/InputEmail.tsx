import "./InputEmail.scss";

export const InputEmail: React.FC<{
  placeholder: string;
}> = ({ placeholder }) => {
  return (
    <div className='email-input'>
      <div className='icon-left'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_98_1151)'>
            <path
              d='M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z'
              fill='currentColor'
            />
          </g>
          <defs>
            <clipPath id='clip0_98_1151'>
              <rect width='24' height='24' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
      <input className='input' type='text' placeholder={placeholder} />
      <div className='icon-right'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_145_1412)'>
            <path
              d='M3 11H17.17L13.59 7.41L15 6L21 12L15 18L13.59 16.59L17.17 13H3V11Z'
              fill='currentColor'
            />
          </g>
          <defs>
            <clipPath id='clip0_145_1412'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='matrix(-1 0 0 1 24 0)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
};
