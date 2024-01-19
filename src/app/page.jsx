import EmptyState from "@/components/searchPage/EmptyState";
import ListingCard from "@/components/searchPage/listingCard/ListingCard";
import getCurrentUserId from "@/actions/getCurrentUserId";
import { authApi } from "@/lib/axios";

export default async function Home() {
  const isEmpty = false;
  const currentUser = await getCurrentUserId();

  // ServerSide Axios api Test용 Code
  if (currentUser) {
    const favoriteList = await authApi.get(
      `/users/${currentUser?.id}/favorite`
    );
    console.log(favoriteList.data);
  }

  if (isEmpty) {
    return <EmptyState showReset />;
  }

  return (
    <div
      className="
                  pt-5
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  md:grid-cols-3
                  lg:grid-cols-4
                  xl:grid-cols-5
                  2xl:grid-cols-6
                  gap-8
                "
    >
      <ListingCard id="1" />
      <ListingCard id="2" />
      <ListingCard id="3" />
      <ListingCard id="4" />
      <ListingCard id="5" />
      <ListingCard id="6" />
    </div>
  );
}
