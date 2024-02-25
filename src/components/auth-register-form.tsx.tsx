import { Input } from '@nextui-org/react';
import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { getRandomHexColor } from '@/utils/functions';

interface Props {
  test: boolean;
}

export default function AuthRegisterForm({ test }: Props) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const [signIn, setSignIn] = useState(test);

  const [registerSuccess, setRegisterSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    name: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const newErrors: any = { ...errors };

    if (name === 'name' && /\d/.test(value)) {
      newErrors[name] = 'Name should not contain numbers';
    } else {
      newErrors[name] = ''; // Clear error if validation passes
    }

    setErrors(newErrors);
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUpWithEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can access form data from the 'formData' state here or perform an action with it
    // Check if any errors exist before submitting
    if (Object.values(errors).some((error) => error !== '')) {
      alert('Please correct the form errors before submitting.');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          user_name: formData.userName,
          avatar_url: `https://images.placeholders.dev/?text=${formData.name
            .charAt(0)
            .toLocaleUpperCase()}&width=50&height=50&bgColor=${getRandomHexColor()}`,
        },
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      console.log(error.message);
    } else {
      setRegisterSuccess(true);
    }
  };

  const handleSignInWithEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      console.log(error.message);

      setErrors({
        name: error.message,
      });
    } else {
      router.refresh();
    }
  };

  return (
    <div className="min-w-[320px] md:min-w-[400px] xl:min-w-[440px]">
      {signIn ? (
        <>
          <form className="flex flex-col gap-4 mt-2" onSubmit={handleSignInWithEmail}>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-2">
              <Input type="email" label="Email" name="email" isRequired onChange={handleChange} />
              {test && <small>{test === true ? 'admin@em-admin.com' : ''}</small>}
            </div>
            <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-2">
              <Input type="password" label="Password" name="password" isRequired onChange={handleChange} />
              {test && <small>{test === true ? 'admin123' : ''}</small>}
            </div>
            <div className="flex justify-between">
              <button
                className="bg-sky-300 text-md font-bold rounded-full px-5 py-2 self-start hover:bg-sky-400"
                type="submit"
              >
                Sign In
              </button>
              <span
                onClick={() => setSignIn(false)}
                className="text-sky-400 underline underline-offset-2 hover:cursor-pointer"
              >
                I do not have an account yet
              </span>
            </div>

            <span style={{ color: 'red' }}>{errors.name}</span>
          </form>
        </>
      ) : (
        <>
          {registerSuccess === false ? (
            <>
              <form className="flex flex-col gap-4 mt-2" onSubmit={handleSignUpWithEmail}>
                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="name" label="Name" name="name" isRequired onChange={handleChange} />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="userName" label="User Name" name="userName" isRequired onChange={handleChange} />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="email" label="Email" name="email" isRequired onChange={handleChange} />
                </div>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                  <Input type="password" label="Password" name="password" isRequired onChange={handleChange} />
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-sky-300 text-md font-bold rounded-full px-5 py-2 self-start hover:bg-sky-400"
                    type="submit"
                  >
                    Submit
                  </button>
                  <span
                    onClick={() => setSignIn(true)}
                    className="text-sky-400 underline underline-offset-2 hover:cursor-pointer"
                  >
                    I already have an account
                  </span>
                </div>

                <span style={{ color: 'red' }}>{errors.name}</span>
              </form>
            </>
          ) : (
            <>
              <span className="text-sky-400">
                Successfully registered, please check your email inbox to confirm your email address.
              </span>
            </>
          )}
        </>
      )}
    </div>
  );
}
