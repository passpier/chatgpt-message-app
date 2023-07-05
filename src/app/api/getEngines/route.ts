import openai from "@/libs/chatgpt";
import { NextResponse } from "next/server";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOptions: Option[];
};
export async function GET() {
  try {
    const models = await openai.listModels().then((res) => res.data.data);
    const modelOptions = models.map((model) => ({
      value: model.id,
      label: model.id,
    }));
    return NextResponse.json({ modelOptions });
  } catch (e) {
    console.log(e);
    return NextResponse.json({}, { status: 500 });
  }
}
