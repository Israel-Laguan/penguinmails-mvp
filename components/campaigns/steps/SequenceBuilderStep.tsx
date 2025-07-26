"use client";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useAddCampaignContext } from "@/context/AddCampaignContext";
import { Clock, Mail, Trash2, Zap } from "lucide-react";
import { useRef } from "react";

interface EmailStep {
  id: string;
  type: "email" | "wait";
  subject?: string;
  content?: string;
  delay?: number;
  delayUnit?: "hours" | "days";
  condition?: "always" | "no_reply";
}

function SequenceBuilderStep() {
  const { form } = useAddCampaignContext();
  const { setValue, watch } = form;
  const sequence = watch("sequence") || [];
  const focusedTextareaIndex = useRef<number | null>(null);
  const addEmailStep = () => {
    const newStep: EmailStep = {
      id: Date.now().toString(),
      type: "email",
      subject: "",
      content: "",
      condition: sequence.length > 0 ? "no_reply" : "always",
    };
    setValue("sequence", [...sequence, newStep]);
  };

  const addWaitStep = () => {
    const newStep: EmailStep = {
      id: Date.now().toString(),
      type: "wait",
      delay: 2,
      delayUnit: "days",
    };
    setValue("sequence", [...sequence, newStep]);
  };

  const updateStep = (index: number, updates: Partial<EmailStep>) => {
    const updatedSequence = sequence.map((step, i) =>
      i === index ? { ...step, ...updates } : step
    );
    setValue("sequence", updatedSequence);
  };

  const removeStep = (index: number) => {
    const updatedSequence = sequence.filter((_, i) => i !== index);
    setValue("sequence", updatedSequence);
  };

  function addMergeTag(tag: string) {
    if (focusedTextareaIndex.current === null) return;

    const stepToUpdate = sequence[focusedTextareaIndex.current];
    if (stepToUpdate && stepToUpdate.type === "email") {
      const currentContent = stepToUpdate.content || "";
      const updatedContent = currentContent
        ? `${currentContent} ${tag}`
        : tag;
      updateStep(focusedTextareaIndex.current, { content: updatedContent });
    }
  }
  return (
    <>
      <Card className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
        <CardHeader className="text-center mb-8">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Build Email Sequence
          </h2>
          <p className="text-gray-600">
            Create your email flow with personalized messages and timing
          </p>
        </CardHeader>

        <div className="flex justify-center space-x-4 mb-8">
          <Button
            type="button"
            onClick={addEmailStep}
            className="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors flex items-center space-x-2 shadow-sm"
          >
            <Mail className="w-5 h-5" />
            <span>Add Email</span>
          </Button>
          <Button
            type="button"
            onClick={addWaitStep}
            className="px-6 py-3 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors flex items-center space-x-2 shadow-sm"
          >
            <Clock className="w-5 h-5" />
            <span>Add Wait</span>
          </Button>
        </div>
      </Card>

      <div className="space-y-6">
        {sequence.map((step, index) => (
          <div
            key={step.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    step.type === "email" ? "bg-orange-100" : "bg-gray-100"
                  }`}
                >
                  {step.type === "email" ? (
                    <Mail className="w-5 h-5 text-orange-600" />
                  ) : (
                    <Clock className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.type === "email"
                      ? `Email ${Math.floor(index / 2) + 1}`
                      : "Wait Step"}
                  </h3>
                  <p className="text-sm text-gray-500">Step {index + 1}</p>
                </div>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => removeStep(index)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </Button>
            </div>

            {step.type === "email" ? (
              <div className="space-y-6">
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject Line
                  </Label>
                  <Input
                    type="text"
                    value={step.subject || ""}
                    onChange={(e) =>
                      updateStep(index, { subject: e.target.value })
                    }
                    placeholder="Email subject..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Content
                  </Label>
                  <Textarea
                    rows={6}
                    value={step.content || ""}
                    onChange={(e) =>
                      updateStep(index, { content: e.target.value })
                    }
                    onFocus={() => (focusedTextareaIndex.current = index)}
                    placeholder="Email content..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                  />
                </div>
                {index > 0 && (
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-2">
                      Send Condition
                    </Label>
                    <Select
                      value={step.condition || "no_reply"}
                      onValueChange={(value) =>
                        updateStep(index, {
                          condition: value as "always" | "no_reply",
                        })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="no_reply">
                          Only if no reply
                        </SelectItem>
                        <SelectItem value="always">Always send</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Wait Duration
                  </Label>
                  <Input
                    type="number"
                    value={step.delay || 2}
                    onChange={(e) =>
                      updateStep(index, {
                        delay: parseInt(e.target.value) || 0,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-gray-700 mb-2">
                    Unit
                  </Label>
                  <Select
                    value={step.delayUnit || "days"}
                    onValueChange={(value) =>
                      updateStep(index, {
                        delayUnit: value as "hours" | "days",
                      })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hours">Hours</SelectItem>
                      <SelectItem value="days">Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h4 className="font-medium text-blue-900 mb-3">Available Merge Tags</h4>
        <div className="flex flex-wrap gap-2">
          {[
            "{{first_name}}",
            "{{last_name}}",
            "{{company}}",
            "{{title}}",
            "{{email}}",
            "{{sender_name}}",
          ].map((tag) => (
            <span
              key={tag}
              onClick={() => addMergeTag(tag)}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
export default SequenceBuilderStep;

