import { Button,Form, Input,Modal } from "antd";
import logo from './headerLogo.png'
import { useState } from "react";
import Reusebtn from './commponent/Reusebtn'

const App = () => {

  const [formData, setFormData] = useState({  
    field1: '',  
    field2: '',  
    // Add more fields as needed  
  }); 

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  const  [open, setOpen] = useState(false);
  
  const [isFormFilled, setIsFormFilled] = useState(false); 


  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  };


  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const handleChange = (e) => {  
    const { name, value } = e.target;  
    setFormData({  
      ...formData,  
      [name]: value,  
    });  

    // Check if all fields are filled  
    const isFilled = Object.values(formData).every((val) => val.trim() !== '');  
    setIsFormFilled(isFilled);  
  };  


  const titleBtn=[{id:0,title:"ورود"},{id:1,title:"ثبت نام"}]
  const onChange = (text) => {
    console.log('onChange:', text);
  };
  const sharedProps = {
    onChange,
  };

  return (
    <div className="h-screen w-full flex ">
         <div className="h-full w-1/2 p-5">
         <div className="flex items-center justify-center w-full h-full">
         <div className="flex flex-col itmes-center justify-center h-full w-1/2 pt-32 ">
          <Form
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="animate-fade-in-left animate-delay-500 rounded-3xl w-full p-10 flex flex-col gap-2  bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-700 via-orange-500 to-orange-300 bg-opacity-30 shadow-[6px_4px_6px_3px_#f6ad55]"
          >
            <Form.Item name="codemeli"   rules={[  
    { max: 10,  
    message: 'کد ملی باید حداکثر 10 کاراکتر باشد'}]}>
              <Input  
  className="rounded-full h-10 w-full border border-[#C4C4C4 outline-none]"  
  name="field1" onChange={handleChange}
  placeholder="کد ملی"  
  onKeyPress={(e) => {  
    const onlyNumbers = /^[0-9]*$/;  
    if (!onlyNumbers.test(e.key)) {  
      e.preventDefault();  
    }  
  }}  
  maxLength={15}  
  count={{
    show: false,
    max: 10,
  }}
/>  

            </Form.Item>
            <Form.Item  
  name="phone"  
  rules={[  
    { max: 11, message: 'شماره همراه باید حداکثر 11 کاراکتر باشد'},  
    {  
      validator: (_, value) => {  
        const onlyNumbers = /^[0-9]*$/;  
        if (value.length >= 2 && !value.startsWith('09')) {  
          return Promise.reject(new Error('شماره همراه معتبر وارد کنید'));  
        }  
        if (!onlyNumbers.test(value)) {  
          return Promise.reject(new Error('شماره همراه فقط می‌تواند شامل اعداد باشد'));  
        }  
        return Promise.resolve();  
      }  
    }  
  ]}  
>  
               <Input
               name="field2" onChange={handleChange}
                onKeyPress={(e) => {  
                  const onlyNumbers = /^[0-9]*$/;  
                  if (!onlyNumbers.test(e.key)) {  
                    e.preventDefault();  
                  }  
                }} 
                maxLength={15}  
                
        count={{
          show: false,
          max: 11,
        }}
                        placeholder="شماره همراه"
        className="rounded-full h-10 w-full  border border-[#C4C4C4 outline-none] ltr"
      />
            </Form.Item>
            <div className="w-full flex flex-col  gap-5 my-4">      
              <div className="flex justify-center items-center gap-5">
              {titleBtn.map(i => (  
  <Button  
    htmlType="submit"  
    className={`h-12 text-base ${isFormFilled ? 'opacity-100' : 'opacity-50'} hover:font-bold w-full rounded-3xl bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white`}
    size="small"  
    onClick={i.title === 'ورود' ? showModal : null}  
  >  
    {i.title}  
  </Button>  

))}  
     

                </div>
                <Button
                  htmlType="submit"
                  className=" h-12  text-base w-full hover:font-bold  rounded-3xl bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white"
                  size="large"
                >
                  پنل بازگانی
                </Button>
              
            </div>
          </Form>
          </div>
          </div>
          </div>
          <div className=" h-full w-1/2 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 text-white">
<div className="h-full flex flex-col items-center justify-center gap-10 animate-fade-in-right animate-delay-500">
<img
      className="h-40 w-40 object-cover object-center"
      src={logo}
      alt="nature image"
    />
          <h1 className="text-5xl ">اتاق بازگانی صنایع معادن و تجارت ایران</h1>
          <div class="flex  items-center justify-center">
    <h1

      class="text-lg text-white font-bold px-20 leading-8">
      انجمن های بازرگانی در ایران از سابقه ای حدود 130ساله برخوردارند.اتاق تجارت در سال 1305 تاسیس شد.در سال 1320 با تصویب قانون جدیدی، اتاق بخش خصوصی ایران به اتاق بازرگانی تغییر نام داد پس از آن در سال 1341 قانون تاسیس اتاق صنایع و معادن تصویب شد.در سال 1342 اتاق صنایع و معادن تاسیس شد و در سال 1348 این دو اتاق، ادغام و اتاق بازرگانی، صنایع، معادن ایران تاسیس شد.در سال 1390با تصویب قانون بهبود مستمر محیط کسب و کار، عنوان کشاورزی نیز به انتهای نام اتاق افزوده شده است و به این ترتیب، پارلمان بخش خصوصی به اتاق « بازرگانی، صنایع، معادن و کشاورزی ایران» تغییر نام داد.
    </h1>
</div>
      </div>
      </div>
      <Modal
        title="کد پیامک شده را وارد کنید"
        open={open}
        onOk={handleOk}
        footer={({}) => (
          <div className="w-1/2 flex items-center justify-center">
              <Reusebtn title='لفو' onClick={handleCancel}/>  
              <Reusebtn title='تایید' onClick={handleOk}/> 
          </div>
        )}
      >
        <div className="flex items-center justify-center w-full py-3">
        <Input.OTP length={6} {...sharedProps} dir="ltr" />
        </div>
      </Modal>
    </div>
  );
};

export default App;