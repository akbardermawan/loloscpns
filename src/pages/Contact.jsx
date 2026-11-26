import { useState, useEffect } from "react";

const Contact = () => {
  //send message
  const [form, setForm] = useState({
    name: "",
    email: "",
    nohp: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwNZAWJgSIWpil3C5WXVA44p5SDYAuF7DUecWdrw-hoCY8KEygTCzhGjBOVtzTDT6EnJg/exec";

    //send to telegram
    const BOT_TOKEN = "8948801981:AAEyNOs1wjvtmitq2M48XZTTecDFENhcUcM";
    const CHAT_ID = "8870754628";

    const googleFormData = new FormData();

    googleFormData.append("nama", form.name.trim());
    googleFormData.append("mail", form.email.trim());
    googleFormData.append("hp", form.nohp.trim());
    googleFormData.append("pesan", form.message.trim());

    const telegramMessage = `
📩 PESAN BARU DARI WEBSITE

👤 Name
${form.name.trim()}

📧 Email
${form.email.trim()}

📱 No HP
${form.nohp.trim()}

💬 Message
${form.message.trim()}
`;

    try {
      // Kirim ke Google Sheet dan Telegram secara bersamaan
      const [googleResponse, telegramResponse] = await Promise.all([
        fetch(scriptURL, {
          method: "POST",
          body: googleFormData,
        }),

        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: telegramMessage,
          }),
        }),
      ]);

      // Cek response Telegram
      const telegramData = await telegramResponse.json();

      if (!telegramData.ok) {
        throw new Error(
          telegramData.description || "Gagal mengirim pesan ke Telegram",
        );
      }

      // Cek response Google
      if (!googleResponse.ok) {
        throw new Error("Gagal mengirim data ke Google Sheet");
      }

      // Berhasil
      alert("Pesan berhasil dikirim! 🎉");

      // Reset form
      setForm({
        name: "",
        email: "",
        nohp: "",
        message: "",
      });
    } catch (error) {
      console.error("Send message error:", error);

      alert(
        error.message ||
          "Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-10 px-4">
      <div className="relative overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-sky-500 px-6 py-8 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-7 h-7 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-9.97 6.23a1.5 1.5 0 0 1-1.59 0L2.25 6.75"
              />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white font-poppins">
            Send Me a Message
          </h2>

          <p className="text-blue-100 text-sm mt-2">
            Have a question or project in mind? Let's talk!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="nohp"
              value={form.nohp}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or question..."
              required
              className="w-full bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 rounded-xl px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-sky-500 hover:from-blue-800 hover:to-sky-600 disabled:from-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12h12m-5-5 5 5-5 5"
                  />
                </svg>
              </>
            )}
          </button>

          <p className="text-center text-xs text-slate-400">
            Your information will be kept private and confidential.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
