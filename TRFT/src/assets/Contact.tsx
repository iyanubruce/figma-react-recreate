

const Contact = () => {
  return ( 
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 h-5/6 md:h-4/5 rounded-lg shadow-lg bg-purple-600 p-6">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-lg">Phone:</p>
            <p className="mt-2">+1 (123) 456-7890</p>
          </div>
          <div>
            <p className="text-lg">Email:</p>
            <p className="mt-2">info@example.com</p>
          </div>
          <div>
            <p className="text-lg">Address:</p>
            <p className="mt-2">123 Main St, City, Country</p>
          </div>
          <div>
            <p className="text-lg">Social Media:</p>
            <p className="mt-2">
              <a href="#" className="hover:underline">Facebook</a>,{' '}
              <a href="#" className="hover:underline">Twitter</a>,{' '}
              <a href="#" className="hover:underline">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Contact;
