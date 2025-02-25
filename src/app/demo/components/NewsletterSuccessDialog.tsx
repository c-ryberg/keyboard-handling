"use client";

export const NewsletterSuccessDialog = ({
  showDialog,
  hideDialog,
}: {
  showDialog: boolean;
  hideDialog: () => void;
}) => {
  return (
    <>
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="mb-4">
              You have successfully subscribed to our newsletter.
            </p>
            <button
              onClick={hideDialog}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
