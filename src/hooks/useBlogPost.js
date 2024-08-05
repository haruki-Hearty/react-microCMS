import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from "../lib/microcms/client";
//idが一致する詳細ページのデータのみとってくる
export const useBlogPost = () => {
  const { id } = useParams();//URLからidを取得
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await client.get({
          endpoint: "blog",
          queries: { filters: `id[equals]${id}` }, // 特定のIDに基づいてフィルタリング
        });
        if (response.contents.length > 0) {
          setPost(response.contents[0]);
        } else {
          setError("記事が見つかりませんでした");
        }
      } catch (error) {
        setError("記事の取得中にエラーが発生しました");
        console.error("Error fetching blog post:", error);
      }
    };
    fetchPost();
  }, [id]);
  return { post, error };
}
