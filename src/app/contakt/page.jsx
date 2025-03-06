import Input from "antd/es/input/Input";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

function Contact() {
  return (
    <div className="container mt-20 mx-auto max-w-lg bg-slate-200 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl text-blue-600 font-semibold text-center mb-4">Biz bilan bog'laning</h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-black text-lg mb-1">Ism</label>
          <Input placeholder="Ismingizni kiriting" className="border border-black" />
        </div>
        <div className="flex flex-col">
          <label className="text-black text-lg mb-1">Email</label>
          <Input placeholder="Email manzilingiz" className="border border-black" />
        </div>
        <div className="flex flex-col">
          <label className="text-black text-lg mb-1">Xabar</label>
          <TextArea rows={4} placeholder="Xabaringizni kiriting" maxLength={200} className="border border-black" />
        </div>
        <Button type="primary" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2">Yuborish</Button>
      </div>
    </div>
  );
}

export default Contact;