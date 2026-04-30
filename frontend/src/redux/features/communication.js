import { apiSlice} from "../api/apiSlice";

export const communicationApiSlice = apiSlice.injectEndpoints({ 
    endpoints: (builder) => ({  
        createMessage: builder.mutation({
            query: (data) => ({
                url: "/communication",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Communication"],
        }),
        getMessages: builder.query({

            query: () => "/communication",
            providesTags: ["Communication"],
        }),
        sendMessage: builder.mutation({
            query: (id) => ({
                url: `/communication/${id}/send`,
                method: "POST",
            }),
            invalidatesTags: ["Communication"],
        }),
    }),
});

export const { useCreateMessageMutation, useGetMessagesQuery, useSendMessageMutation } = communicationApiSlice;