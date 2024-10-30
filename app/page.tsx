"use client";

import Image from "next/image";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { getPage } from "@/lib/contentstack";
import { useEffect, useState } from "react";
import { Page } from "@/lib/types";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const live_preview = searchParams.get("live_preview") || false;
  const content_type_uid = searchParams.get("content_type_uid") || "";
  const entry_uid = searchParams.get("entry_uid") || "";

  const [page, setPage] = useState<Page>();

  const getContent = async () => {
    const page = await getPage("/");
    setPage(page as Page);
  };

  useEffect(() => {
    live_preview &&
      ContentstackLivePreview.setConfigFromParams({
        live_preview,
        content_type_uid,
        entry_uid,
      });

    ContentstackLivePreview.onEntryChange(getContent);
  }, []);

  return (
    <main className="max-w-screen-2xl mx-auto">
      <section className="p-4">
        {page?.title ? (
          <h1
            className="text-4xl font-bold mb-4"
            {...(page?.$ && page?.$.title)}
          >
            {page?.title}
          </h1>
        ) : null}

        {page?.description ? (
          <p className="mb-4" {...(page?.$ && page?.$.description)}>
            {page?.description}
          </p>
        ) : null}

        {page?.imageConnection ? (
          <Image
            className="mb-4"
            width={640}
            height={360}
            src={page?.imageConnection?.edges[0].node.url}
            alt={page?.imageConnection?.edges[0].node.title}
            {...(page?.imageConnection?.edges[0].node.$ &&
              page?.imageConnection?.edges[0].node.$.url)}
          />
        ) : null}

        {page?.rich_text ? (
          <div
            {...(page?.$ && page?.$.rich_text)}
            dangerouslySetInnerHTML={{ __html: page?.rich_text }}
          />
        ) : null}

        <div className="space-y-8 max-w-screen-sm mt-4">
          {page?.blocks?.map((item, index) => {
            const { block } = item;
            const isImageLeft = block.layout === "image_left";

            return (
              <div
                key={`${block}-${index}`}
                {...(page?.$ && page?.$[`blocks__${index}`])}
                className={`flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${
                  isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="w-full md:w-1/2">
                  {block.imageConnection ? (
                    <Image
                      src={block.imageConnection.edges[0].node.url}
                      alt={block.imageConnection.edges[0].node.title}
                      width={200}
                      height={112}
                      className="w-full"
                      {...(block?.imageConnection?.edges[0].node.$ &&
                        block?.imageConnection?.edges[0].node.$.url)}
                    />
                  ) : null}
                </div>
                <div className="w-full md:w-1/2">
                  {block.title ? (
                    <h2
                      className="text-2xl font-bold"
                      {...(block?.$ && block?.$.title)}
                    >
                      {block.title}
                    </h2>
                  ) : null}
                  {block.copy ? (
                    <div
                      {...(block?.$ && block?.$.copy)}
                      dangerouslySetInnerHTML={{ __html: block.copy }}
                      className="prose"
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
